import React, { useEffect, useRef } from 'react';

// Technology data with official colors and SVG paths
type TechData = {
  [key: string]: {
    color: string;
    path: string;
  };
};

const techData: TechData = {
  'TypeScript': {
    color: '#3178C6',
    path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0z',
  },
  'React': {
    color: '#61DAFB',
    path: 'M12 15.31l-3.72 1.9a4.49 4.49 0 0 1-2.23.6 4.49 4.49 0 0 1-2.23-.6 4.49 4.49 0 0 1-2.23-3.9 4.49 4.49 0 0 1 2.23-3.9 4.49 4.49 0 0 1 4.46 0L12 8.69l3.72-1.9a4.49 4.49 0 0 1 4.46 0 4.49 4.49 0 0 1 2.23 3.9 4.49 4.49 0 0 1-2.23 3.9 4.49 4.49 0 0 1-2.23.6 4.49 4.49 0 0 1-2.23-.6L12 15.31z',
  },
  'Next.js': {
    color: '#000000',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.895 17.611a.9.9 0 0 1-.9.9h-1.8a.9.9 0 0 1-.9-.9v-5.4h-1.8v5.4a.9.9 0 0 1-.9.9h-1.8a.9.9 0 0 1-.9-.9V6.39a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v5.4h1.8v-5.4a.9.9 0 0 1 .9-.9h1.8a.9.9 0 0 1 .9.9v11.222z',
  },
  'Node.js': {
    color: '#339933',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 4.5h3v3h-3v-3zm0 4.5h3v10.5h-3V9z',
  },
  'Python': {
    color: '#3776AB',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 4.5h3v3h-3v-3zm0 4.5h3v10.5h-3V9z',
  },
  'AWS': {
    color: '#FF9900',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z',
  },
  'Java': {
    color: '#007396',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z',
  },
  'Docker': {
    color: '#2496ED',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z',
  },
  'Git': {
    color: '#F05032',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z',
  },
  'SQL': {
    color: '#336791',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z',
  },
  'GraphQL': {
    color: '#E10098',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z',
  },
  'Tailwind CSS': {
    color: '#38B2AC',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z',
  },
} as const;

// Define the props for the TechRing component
interface TechRingProps {
  technologies: (keyof typeof techData)[];
  radius?: number;
  className?: string;
}

const TechRing: React.FC<TechRingProps> = ({ technologies, radius = 150, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const techElements = Array.from(container.querySelectorAll<HTMLElement>('div[title]'));
    const totalTechs = techElements.length;
    if (totalTechs === 0) return;
    
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const baseRadius = radius;
    const angleIncrement = (2 * Math.PI) / totalTechs;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const elapsed = timestamp - (startTime || 0);
      const progress = (elapsed % 10000) / 10000; // 10 second loop
      const rotation = progress * 2 * Math.PI;

      techElements.forEach((el, index) => {
        const angle = index * angleIncrement + rotation;
        const x = centerX + baseRadius * Math.cos(angle) - 20; // 20 is half of icon size
        const y = centerY + baseRadius * Math.sin(angle) - 20;
        
        el.style.transform = `translate(${x}px, ${y}px)`;
        el.style.opacity = '1';
        
        // Add z-index based on position for layering
        const zIndex = Math.round((Math.sin(angle) + 1) * 10) + 1;
        el.style.zIndex = zIndex.toString();
        // Ensure TypeScript knows we're setting a valid style property
        (el.style as any).willChange = 'transform, opacity';
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [technologies.length, radius]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        ref={containerRef}
        className={`relative w-[400px] h-[400px] pointer-events-none ${className}`}
        style={{
          transform: 'translateZ(0)', // Force hardware acceleration
          willChange: 'transform, opacity' as any // Type assertion for willChange
        }}
      >
        {technologies.map((tech) => {
          const techInfo = techData[tech];
          if (!techInfo) return null;
          
          const { path, color } = techInfo;
          return (
            <div
              key={tech}
              className="absolute w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0"
              title={String(tech)}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{
                  backgroundColor: `${color}20`,
                  border: `1px solid ${color}40`,
                  boxShadow: `0 0 10px ${color}40`,
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)'
                }}
              >
                <svg 
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                  style={{ fill: color }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={path} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Export the tech data and component
export { techData };
export default TechRing;
