'use client';

import React, { useRef, useEffect, useState } from 'react';
import awsLogo from '@/assets/logos/aws-svgrepo-com.svg';
import djangoLogo from '@/assets/logos/django-svgrepo-com.svg';
import dockerLogo from '@/assets/logos/docker-1-logo-svgrepo-com.svg';
import javaLogo from '@/assets/logos/java-4-logo-svgrepo-com.svg';
import mongodbLogo from '@/assets/logos/mongodb-svgrepo-com.svg';
import nextjsLogo from '@/assets/logos/nextjs-svgrepo-com.svg';
import nodejsLogo from '@/assets/logos/nodejs-1-logo-svgrepo-com.svg';
import pythonLogo from '@/assets/logos/python-3-logo-svgrepo-com.svg';
import typescriptLogo from '@/assets/logos/typescript-svgrepo-com.svg';

const LOGOS = [
  awsLogo,
  djangoLogo,
  dockerLogo,
  javaLogo,
  mongodbLogo,
  nextjsLogo,
  nodejsLogo,
  pythonLogo,
  typescriptLogo,
];

interface SingleTechRingProps {
  size?: number; // diameter in px
  profilePicture?: React.ReactNode; // JSX for profile pic
  className?: string;
}

const SingleTechRing: React.FC<SingleTechRingProps> = ({
  size = 440,
  profilePicture,
  className = '',
}) => {
  const ringRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (!isMounted) return;
    let angle = 0;
    let anim: number;
    const speed = 0.017; // radians per frame
    function animate() {
      angle += speed;
      if (ringRef.current) {
        ringRef.current.style.transform = `rotate(${angle}rad)`;
      }
      anim = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(anim);
  }, [isMounted]);

  if (!isMounted) return null;

  // Make ring radius proportional to new size
  const ringRadius = size * 0.41;

  // Use the main page gradient (green-black-red)
  const gradient = 'linear-gradient(to right top, #0d4a13 0%, #1a2e1a 15%, #000000 35%, #000000 65%, #2e1a1a 85%, #4a0d0d 100%)';

  const iconSize = 112; 
  const svgSize = 76;  

  const iconStyle = (angle: number) => ({
    position: 'absolute' as const,
    left: `calc(50% + ${ringRadius * Math.cos(angle)}px - ${iconSize/2}px)` ,
    top: `calc(50% + ${ringRadius * Math.sin(angle)}px - ${iconSize/2}px)` ,
    width: iconSize,
    height: iconSize,
    borderRadius: '50%',
    background: gradient,
    boxShadow: '0 2px 24px #000a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #fff5',
    zIndex: 2,
    pointerEvents: 'auto' as const,
    transition: 'transform 0.2s',
  });

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Single ring (no white circle, just icons) */}
      <div ref={ringRef} style={{ position: 'absolute', left: 0, top: 0, width: size, height: size }}>
        {LOGOS.map((logo, i) => {
          const angle = (2 * Math.PI * i) / LOGOS.length;
          return (
            <div key={i} style={iconStyle(angle)}>
              <img 
                src={logo.src} 
                alt="tech logo" 
                style={{ 
                  width: svgSize, 
                  height: svgSize, 
                  filter: 'brightness(0) invert(1)', 
                  objectFit: 'contain',
                  display: 'block',
                }} 
              />
            </div>
          );
        })}
      </div>
      {/* Profile picture in center (2x large) */}
      <div
        className="absolute left-1/2 top-1/2 z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl"
        style={{
          width: size * 0.52,
          height: size * 0.52,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {profilePicture || <span className="text-7xl md:text-9xl font-bold text-white">FK</span>}
      </div>
    </div>
  );
};

export default SingleTechRing;
