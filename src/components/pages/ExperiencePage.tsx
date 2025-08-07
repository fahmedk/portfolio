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
        paddingTop: '2rem',    // pull closer to top
        paddingBottom: '4rem', // whatever bottom padding you like
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
            className="flex flex-col lg:flex-row"
            style={{ alignItems: 'flex-start', gap: '1rem', marginTop: '-8rem' }}
          >
            {/* Left Side - Wabtec Image */}
            <div className="flex-shrink-0">
              <div
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                style={{ width: '720px', height: '720px', padding: '16px' }}
              >
                <img
                  src={wabtecLogo.src}
                  alt="Wabtec Corporation logo"
                  style={{
                    width: '528px',
                    height: '528px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="flex-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    AI/Cloud Engineer Intern
                  </h3>
                  <p className="text-blue-400 text-lg font-medium">
                    Wabtec Corporation • June 2024 - Present
                  </p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  At Wabtec Corporation, I'm leading AI infrastructure development
                  and cloud solutions for the transportation industry. I help shape
                  the future of transportation technology by building systems that
                  make our platforms more secure and efficient for our global
                  community of users.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  From enhancing security to optimizing performance, every line of
                  code is written with our users' experience in mind. Tech stack:
                  AWS, Kubernetes, Amazon Bedrock, Docker, Python, and AI/ML. For
                  specific contributions, see resume here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
