'use client';

import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import wabtecLogo from '@/assets/logos/wabtec.png';

const ExperiencePage: React.FC = () => {
  return (
    <section
      id="experience"
      // remove the "section" class so we don’t get 100vh centering
      style={{
        display: 'block',
        paddingTop: '1rem',    // pull closer to top
        paddingBottom: '0rem', // whatever bottom padding you like
        scrollMarginTop: '120px', // ensure proper scroll offset
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <div className="fade-in-up">
          <h2
            className="section-title"
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '2rem',
              color: 'white',
            }}
          >
            Work Experience
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              color: '#a0a0a0',
              textAlign: 'center',
              marginBottom: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Looking to build a better tomorrow.
          </p>

          {/* Wabtec Experience */}
          <div
            className="flex flex-row"
            style={{ alignItems: 'flex-start', gap: '0rem', marginTop: '-8rem' }}
          >
            {/* Left Side - Image with Border */}
            <div className="flex-shrink-0 flex">
              <div
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                style={{ width: '720px', height: '720px', padding: '16px 0 16px 16px', overflow: "hidden"}}
              >
                <img
                  src={wabtecLogo.src}
                  alt="Wabtec Corporation logo"
                  style={{
                    width: '528px',
                    height: '528px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    transform: 'translateX(-40px)',
                    willChange: 'transform',
                  }}
                />
              </div>
            </div>

            {/* Vertical Divider between Image and Text */}
            <div
              aria-hidden="true"
              style={{
                width: '2px',
                height: '295px',
                backgroundColor: 'white',
                marginLeft: 'calc(min(100%, 1200px)/2 - 700px)', // nudge 20px further left
                marginRight: '22px', // spacing before text
                alignSelf: 'flex-start',
                marginTop: '13rem',
              }}
            />

            {/* Right Side - Description */}
            <div
              className="flex-1"
              style={{
                marginLeft: '0.25rem', // small gap from divider
                marginTop: '13rem',
              }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-8xl text-white mb-3" style={{ fontFamily: '"Paul Grotesk", sans-serif', fontWeight: 500 }}>
                    AI Engineer
                  </h3>
                  <p className="text-white text-lg mb-4">
                    <span className="font-bold">Wabtec Corporation</span> - <span className="italic">May 2025 - August 2025</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300 text-base leading-relaxed">
                    At Wabtec Corporation, I lead Gen AI infrastructure development
                    and cloud solutions research for the transportation industry. I helped shape
                    the future of corporate technology by building systems that
                    make our platforms more secure and efficient for our global
                    community of users.
                  </p>
                  
                  <p className="text-gray-300 text-base leading-relaxed">
                    From enhancing security to optimizing performance, every line of
                    code was written with our users' experience in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
