import React, { useRef, useEffect } from 'react';
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

interface DualTechRingsProps {
  size?: number; // diameter in px
  profilePicture?: React.ReactNode; // JSX for profile pic
  className?: string;
}

const DualTechRings: React.FC<DualTechRingsProps> = ({
  size = 400,
  profilePicture,
  className = '',
}) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let outerAnim: number, innerAnim: number;
    let outerAngle = 0, innerAngle = 0;
    const speedOuter = 0.02; // radians per frame
    const speedInner = -0.015; // radians per frame (opposite direction)

    function animate() {
      outerAngle += speedOuter;
      innerAngle += speedInner;
      if (outerRef.current) {
        outerRef.current.style.transform = `rotate(${outerAngle}rad)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `rotate(${innerAngle}rad)`;
      }
      outerAnim = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(outerAnim);
    };
  }, []);

  // Split logos: outer (5), inner (4)
  const outerLogos = LOGOS.slice(0, 5);
  const innerLogos = LOGOS.slice(5);

  const ringStyle = (radius: number) => ({
    position: 'absolute' as const,
    left: '50%',
    top: '50%',
    width: 0,
    height: 0,
    pointerEvents: 'none' as any,
  });

  const iconStyle = (angle: number, radius: number) => ({
    position: 'absolute' as const,
    left: `calc(50% + ${radius * Math.cos(angle)}px - 24px)`,
    top: `calc(50% + ${radius * Math.sin(angle)}px - 24px)`,
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: '#18181b',
    boxShadow: '0 2px 8px #0006',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto' as any,
    border: '2px solid #222',
    zIndex: 2,
  });

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ring */}
      <div ref={outerRef} style={ringStyle(size * 0.39)}>
        {outerLogos.map((logo, i) => {
          const angle = (2 * Math.PI * i) / outerLogos.length;
          return (
            <div key={i} style={iconStyle(angle, size * 0.39)}>
              <img src={logo.src} alt="tech logo" style={{ width: 40, height: 40 }} />
            </div>
          );
        })}
      </div>
      {/* Inner ring */}
      <div ref={innerRef} style={ringStyle(size * 0.25)}>
        {innerLogos.map((logo, i) => {
          const angle = (2 * Math.PI * i) / innerLogos.length;
          return (
            <div key={i} style={iconStyle(angle, size * 0.25)}>
              <img src={logo.src} alt="tech logo" style={{ width: 32, height: 32 }} />
            </div>
          );
        })}
      </div>
      {/* Profile picture in center */}
      <div
        className="absolute left-1/2 top-1/2 z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl border-4 border-white/20"
        style={{
          width: size * 0.28,
          height: size * 0.28,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {profilePicture || <span className="text-4xl font-bold text-white">FK</span>}
      </div>
    </div>
  );
};

export default DualTechRings;
