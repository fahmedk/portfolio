'use client';

import { useState, useEffect } from 'react';
import ModernLayout from '@/components/BookLayout';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ExperiencePage from '@/components/pages/ExperiencePage';
import ProjectsPage from '@/components/pages/ProjectsPage';
import ContactPage from '@/components/pages/ContactPage';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ModernLayout currentSection={currentSection} onSectionChange={setCurrentSection}>
      <HomePage />
      <ExperiencePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </ModernLayout>
  );
}
