"use client";
import React, { useState, useEffect } from "react";
import styles from '@/app/hero.module.css';

const fullText = 'Software Engineer | The City College of New York';
const typingSpeed = 100; // ms per character

export default function ClientTypingText() {
  const [displayedText, setDisplayedText] = useState('');

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
    <>
      <span className={styles.typingText}>{displayedText}</span>
      <span className={styles.typingCursor}>|</span>
    </>
  );
}
