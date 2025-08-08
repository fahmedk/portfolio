'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ModernLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({ children, currentSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experiences', icon: Briefcase },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`navbar transition-all duration-300 ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={() => scrollToSection('home')}>
            Furqan Khan
          </a>
          
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section.id}>
                {section.id === 'about' ? (
                  <a
                    href="/about"
                    className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
                  >
                    {section.label}
                  </a>
                ) : (
                  <button
                    className={`nav-link ${
                      currentSection === section.id ? 'active' : ''
                    }`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/fahmedk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/furqan-a-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            2025 Furqan Khan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built using Next.js & TypeScript. No templates were harmed in the making.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernLayout;
