'use client';

import React from 'react';
import styles from '@/app/hero.module.css';
import SingleTechRing from '../ui/SingleTechRing';
import profileImg from '@/assets/logos/IMG_7590.jpeg';
import dynamic from 'next/dynamic';

const ClientTypingText = dynamic(() => import('./ClientTypingText'), { ssr: false });

const HomePage: React.FC = () => {
  

  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Meet...</p>
        
        {/* Avatar and Tech Ring Container */}
        <div className="relative w-full flex justify-center my-12">
          <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center mx-auto">
            <div className="mt-16">
              <SingleTechRing 
                size={360}
                profilePicture={
                  <img 
                    src={typeof profileImg === 'string' ? profileImg : profileImg.src}
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                }
              />
            </div>
          </div>
        </div>
        
        <h1 className={styles.heroTitle + " text-white"}>Furqan Khan</h1>
        <p className={styles.heroDescription}>
          <ClientTypingText />
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
                Your branch is up to date with &apos;origin/hope&apos;.
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
                <div className="text-yellow-300 text-sm">&ldquo;The light that shines twice as bright lasts half as long.&rdquo;</div>
                <div className="text-blue-300 text-sm mt-1">But what if it never stops shining?</div>
                <div className="text-green-300 text-sm mt-2">&ldquo;Dreams make us who we are, pushing us to reach beyond the stars and become the heroes we were meant to be.&rdquo;</div>
              </div>
              
              <div className="mb-2">
                <span className="text-purple-400">hero@fortress</span>:<span className="text-blue-400">~</span>$ <span className="terminal-cursor">_</span>
              </div>
            </div>
        </div>
        

      </div>
    </section>
  );
};

export default HomePage;
