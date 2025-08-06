'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowDown } from 'lucide-react';
import styles from '@/app/hero.module.css';
import SingleTechRing from '../ui/SingleTechRing';

const HomePage: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Software Engineer | The City College of New York';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Introducing</p>
        
        {/* Avatar and Tech Ring Container */}
        <div className="relative w-full flex justify-center my-12">
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            <SingleTechRing 
              size={440}
              profilePicture={<span className="text-5xl md:text-7xl font-bold text-white">FK</span>}
            />
          </div>
        </div>
        
        <h1 className={styles.heroTitle}>Furqan Khan</h1>
        <p className={styles.heroDescription}>
          <span className={styles.typingText}>{displayedText}</span>
          <span className={styles.typingCursor}>|</span>
        </p>
          
        {/* Terminal */}
        <div className="terminal fade-in-up">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <div className="terminal-title">hero@fortress ~</div>
          </div>
            <div className="terminal-content">
              <div className="mb-2">
                <span className="text-purple-400">hero@fortress</span>:<span className="text-blue-400">~</span>$ git status
              </div>
              <div className="mb-2 text-gray-400 text-sm">
                On branch justice
              </div>
              <div className="mb-2 text-gray-400 text-sm">
                Your branch is up to date with 'origin/hope'.
              </div>
              
              <div className="mb-2">
                <span className="text-purple-400">hero@fortress</span>:<span className="text-blue-400">~</span>$ git log --oneline -n 3
              </div>
              <div className="mb-2 text-gray-400 text-sm">
                <div>a1b2c3d (HEAD -&gt; justice) Soar above the clouds and keep looking up</div>
                <div>d4e5f6a Stand for truth, justice, and a better tomorrow</div>
                <div>g7h8i9j Remember: even heroes need to believe in hope</div>
              </div>
              
              <div className="mb-2">
                <span className="text-purple-400">hero@fortress</span>:<span className="text-blue-400">~</span>$ git remote -v
              </div>
              <div className="mb-2 text-gray-400 text-sm">
                <div>origin  git@fortressofsolitude:hero/legacy.git (fetch)</div>
                <div>origin  git@fortressofsolitude:hero/legacy.git (push)</div>
              </div>
              
              <div className="mt-4 mb-2 text-center">
                <div className="text-yellow-300 text-sm">"The light that shines twice as bright lasts half as long."</div>
                <div className="text-blue-300 text-sm mt-1">But what if it never stops shining?</div>
                <div className="text-green-300 text-sm mt-2">"Dreams make us who we are, pushing us to reach beyond the stars and become the heroes we were meant to be."</div>
              </div>
              
              <div className="mb-2">
                <span className="text-purple-400">hero@fortress</span>:<span className="text-blue-400">~</span>$ <span className="terminal-cursor">_</span>
              </div>
            </div>
        </div>
        
        {/* Tech Stack Icons */}
        <div className="tech-grid max-w-2xl mx-auto">
          <div className="tech-item">
            <div className="tech-icon">Py</div>
            <span className="tech-name">Python</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">JS</div>
            <span className="tech-name">JavaScript</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">TS</div>
            <span className="tech-name">TypeScript</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">⚛️</div>
            <span className="tech-name">React</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">▲</div>
            <span className="tech-name">Next.js</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">☁️</div>
            <span className="tech-name">AWS</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🐳</div>
            <span className="tech-name">Docker</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🔥</div>
            <span className="tech-name">Firebase</span>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a
            href="mailto:furqankhan.cs@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="tel:+19293004276"
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg transition-colors"
          >
            <Phone size={20} />
            (929) 300-4276
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-16 animate-bounce">
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <ArrowDown size={20} className="text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
