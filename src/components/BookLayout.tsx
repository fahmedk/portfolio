'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Briefcase, FolderOpen, Mail, Github, Linkedin, ExternalLink, FileText, ChevronDown } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface ModernLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({ children, currentSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experiences', icon: Briefcase },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle section highlighting when navigating from About to Home sections
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    // If we're on the home page and there's a hash in the URL
    // (likely coming from About → section)
    if (pathname === '/' && window.location.hash) {
      // 1. Clear focus from any nav elements to prevent sticky highlight
      const activeElement = document.activeElement as HTMLElement | null;
      if (activeElement?.classList.contains('nav-link') || 
          activeElement?.classList.contains('nav-logo')) {
        activeElement.blur();
      }
      
      // 2. Get the section from the hash and update currentSection
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'experience', 'projects', 'contact'].includes(hash)) {
        // Force update the current section immediately
        onSectionChange(hash);
      }
    }
  }, [pathname, onSectionChange]);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setLinksOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLinksOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    // Handle cross-route navigation (from /about to /#section)
    if (pathname !== '/' && sectionId !== 'about') {
      // Don't call onSectionChange for cross-route - let Home handle it
      // Use router.push with { scroll: false } to prevent default hash jump
      router.push(`/#${sectionId}`, { scroll: false });
      return;
    }
    
    // Call onSectionChange for same-route navigation
    // This immediately updates active state before scroll happens
    onSectionChange(sectionId);
    
    // For same-route navigation, update the URL hash without triggering a scroll
    // This keeps the URL hash and currentSection state in sync
    if (pathname === '/' && sectionId !== 'about') {
      window.history.replaceState(null, '', `/#${sectionId}`);
    }
    
    // Blur the clicked button to prevent focus styles from persisting
    if (e?.currentTarget) {
      const btn = e.currentTarget as HTMLButtonElement;
      btn.blur();
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Get navbar height dynamically
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - navbarHeight - 20; // Extra 20px buffer
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    } else if (sectionId !== 'about') {
      // Only use hash navigation for non-about sections
      window.location.href = `/#${sectionId}`;
    } else {
      // For About, use router
      router.push('/about');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`navbar transition-all duration-300 ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Furqan Khan
          </a>
          
          {/* Hamburger button - only shows on mobile */}
          <button 
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Desktop nav links */}
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section.id}>
                {section.id === 'about' ? (
                  <a
                    href="/about"
                    className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
                    onClick={(e) => {
                      // Handle About link with consistent behavior
                      e.preventDefault();
                      router.push('/about');
                    }}
                  >
                    {section.label}
                  </a>
                ) : section.id === 'contact' ? (
                  <div className="relative" ref={menuRef}>
                    <button
                      className={`nav-link inline-flex items-center gap-1`}
                      aria-haspopup="menu"
                      aria-expanded={linksOpen}
                      onClick={() => setLinksOpen((v) => !v)}
                    >
                      Contact <ChevronDown size={16} />
                    </button>
                    {linksOpen && (
                      <div
                        role="menu"
                        aria-label="Quick links"
                        className="absolute right-0 mt-2 w-56 bg-black/80 border border-gray-700 rounded-md shadow-lg p-2 backdrop-blur contact-dropdown"
                      >
                        <a
                          role="menuitem"
                          href="mailto:furqankhan.cs@gmail.com"
                          className="contact-link"
                          aria-label="Email"
                          onClick={() => setLinksOpen(false)}
                        >
                          <Mail size={16} /> Email
                        </a>
                        <a
                          role="menuitem"
                          href="/resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                          aria-label="Resume"
                          onClick={() => setLinksOpen(false)}
                        >
                          <FileText size={16} /> Resume
                        </a>
                        <a
                          role="menuitem"
                          href="https://github.com/fahmedk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                          aria-label="GitHub"
                          onClick={() => setLinksOpen(false)}
                        >
                          <Github size={16} /> GitHub
                        </a>
                        <a
                          role="menuitem"
                          href="https://www.linkedin.com/in/furqan-a-khan/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 text-gray-200"
                          aria-label="LinkedIn"
                          onClick={() => setLinksOpen(false)}
                        >
                          <Linkedin size={16} /> LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className={`nav-link ${
                      currentSection === section.id ? 'active' : ''
                    }`}
                    onClick={(e) => scrollToSection(section.id, e)}
                    aria-current={currentSection === section.id ? 'page' : undefined}
                  >
                    {section.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Move overlay and mobile menu OUTSIDE the navbar to ensure full-screen coverage */}
      {/* Mobile menu overlay */}
      <div 
        className={`mobile-menu-overlay ${
          mobileMenuOpen ? 'mobile-menu-open' : ''
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      
      {/* Mobile menu - slides from right */}
      <div 
        className={`mobile-menu ${
          mobileMenuOpen ? 'mobile-menu-open' : ''
        }`}
        ref={menuRef}
      >
        <div className="mobile-menu-content">
          <button 
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          
          <ul className="mobile-menu-links">
            {sections.map((section) => (
              <li key={section.id}>
                {section.id === 'about' ? (
                  <a
                    href="/about"
                    className="mobile-menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      router.push('/about');
                    }}
                  >
                    {section.label}
                  </a>
                ) : (
                  <button
                    className="mobile-menu-link"
                    onClick={(e) => {
                      scrollToSection(section.id, e);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {section.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mobile-menu-footer">
            <div className="mobile-menu-social">
              <a href="mailto:furqankhan.cs@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <FileText size={20} />
              </a>
              <a href="https://github.com/fahmedk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/furqan-a-khan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-gray-400 mb-6">
            <div className="hidden sm:block h-px w-24 bg-gray-700" />
            <div className="flex items-center gap-6 footer-social">
              <a
                href="https://www.linkedin.com/in/furqan-a-khan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:furqankhan.cs@gmail.com"
                aria-label="Email"
                className="transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/fahmedk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="transition-colors"
              >
                <FileText size={20} />
              </a>
            </div>
            <div className="hidden sm:block h-px w-24 bg-gray-700" />
          </div>
          <div className="text-center">
            <p className="text-gray-400">2025 Furqan Khan. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Built using Next.js & TypeScript. No templates were harmed in the making.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLayout;
