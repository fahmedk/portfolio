'use client';

import { useState, useEffect, useRef } from 'react';
import ModernLayout from '@/components/BookLayout';
import HomePage from '@/components/pages/HomePage';
// import AboutPage from '@/components/pages/AboutPage';
import ExperiencePage from '@/components/pages/ExperiencePage';
import ProjectsPage from '@/components/pages/ProjectsPage';
import ContactPage from '@/components/pages/ContactPage';



export default function Home() {
  // Initialize with empty string for SSR, will update from hash after mount
  const [currentSection, setCurrentSection] = useState<string>('');
  
  // Track if we just triggered a programmatic scroll
  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Flag to track if initial scroll has been done
  const hasScrolledToInitialSectionRef = useRef(false);

  // Handle manual section changes
  const handleSectionChange = (section: string) => {
    // Always update the currentSection state immediately
    setCurrentSection(section);
    
    // Mark that we're doing a programmatic scroll and prevent
    // the scroll handler from changing the section for a moment
    isManualScrollRef.current = true;
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Reset the flag after scroll animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 1000); // Allow 1 second for scroll to complete
  };

  // Handle initial scroll - used layoutEffect to avoid flash to Home
  useEffect(() => {
    // Always reset the manual scroll flag on mount
    isManualScrollRef.current = false;
    
    // Get hash from URL if present
    const hash = window.location.hash.replace('#', '');
    
    // Only do initial scroll once per mount
    if (!hasScrolledToInitialSectionRef.current && 
        hash && ['home', 'experience', 'projects', 'contact'].includes(hash)) {
      
      // Set currentSection from hash before scrolling
      setCurrentSection(hash);
      
      // Use requestAnimationFrame to make the scroll happen right after paint
      requestAnimationFrame(() => {
        const element = document.getElementById(hash);
        if (element) {
          // Get navbar height dynamically
          const navbar = document.querySelector('.navbar');
          const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
          
          // Calculate scroll position with proper offset
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementTop - navbarHeight - 20;
          
          // Scroll immediately with smooth behavior
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Prevent scroll handler from changing section during scroll
          isManualScrollRef.current = true;
          
          // Reset the flag after scroll animation completes
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          scrollTimeoutRef.current = setTimeout(() => {
            isManualScrollRef.current = false;
          }, 1000);
        }
        
        // Mark that we've handled the initial scroll
        hasScrolledToInitialSectionRef.current = true;
      });
    } else if (!hasScrolledToInitialSectionRef.current) {
      // If no hash, default to 'home'
      setCurrentSection('home');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll detection if we're doing a programmatic scroll
      if (isManualScrollRef.current) return;
      
      const sections = ['home', 'experience', 'projects', 'contact'];
      // Adjust scroll position calculation to account for header height
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
      const scrollPosition = window.scrollY + navbarHeight + 40; // Better detection point below navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Only update if different to avoid unnecessary renders
            if (sectionId !== currentSection) {
              setCurrentSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Only call initial handleScroll if we haven't already scrolled to a hash section
    // This prevents potential race conditions with the initial hash scroll
    const initialScrollTimeout = !hasScrolledToInitialSectionRef.current ? 
      setTimeout(handleScroll, 500) : null;
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (initialScrollTimeout) {
        clearTimeout(initialScrollTimeout);
      }
    };
  }, [currentSection]);
  
  // Listen for hash changes (e.g., browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'experience', 'projects', 'contact'].includes(hash)) {
        // Update the section immediately
        setCurrentSection(hash);
        
        // Allow the browser's default hash scroll behavior
        // but prevent our scroll listener from interfering
        isManualScrollRef.current = true;
        
        // Reset the flag after a delay
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          isManualScrollRef.current = false;
        }, 1000);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <ModernLayout currentSection={currentSection} onSectionChange={handleSectionChange}>
      <HomePage />
      <ExperiencePage />
      {/* About section removed from homepage; reachable via header link */}
      <ProjectsPage />
      <ContactPage />
    </ModernLayout>
  );
}
