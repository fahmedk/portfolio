'use client';

import React from 'react';
import { GraduationCap, Award, Code, Heart, MapPin, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="fade-in-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Striving to develop impactful tech.
          </p>
          
          <div className="grid grid-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div className="fade-in-left">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate AI/Cloud Engineer and Software Developer currently pursuing my 
                  Master's in Computer Science at Georgia Tech. My journey in technology is driven 
                  by a desire to create intelligent solutions that make a meaningful impact.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  Currently working as an AI/Cloud Engineer Intern at Wabtec Corporation, where I 
                  leverage cutting-edge technology to solve complex challenges in the transportation 
                  industry. Previously, I gained valuable experience as a Software Engineer Intern 
                  at The Hipe Network.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring fellow developers. I believe in the power of 
                  technology to transform lives and am committed to using my skills for positive change.
                </p>
                
                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400 text-sm">New York, NY</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Experience</p>
                      <p className="text-gray-400 text-sm">3+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Skills */}
            <div className="fade-in-right">
              <div className="card">
                <h3 className="card-title">Core Competencies</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Code className="text-blue-400" size={18} />
                      Programming Languages
                    </h4>
                    <div className="card-tags">
                      <span className="tag">Python</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">Java</span>
                      <span className="tag">C++</span>
                      <span className="tag">C#</span>
                      <span className="tag">Golang</span>
                      <span className="tag">SQL</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <GraduationCap className="text-green-400" size={18} />
                      Frameworks & Libraries
                    </h4>
                    <div className="card-tags">
                      <span className="tag">React</span>
                      <span className="tag">Next.js</span>
                      <span className="tag">Django</span>
                      <span className="tag">Node.js</span>
                      <span className="tag">Express</span>
                      <span className="tag">TensorFlow</span>
                      <span className="tag">PyTorch</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Award className="text-purple-400" size={18} />
                      Cloud & DevOps
                    </h4>
                    <div className="card-tags">
                      <span className="tag">AWS</span>
                      <span className="tag">Docker</span>
                      <span className="tag">Kubernetes</span>
                      <span className="tag">Firebase</span>
                      <span className="tag">MongoDB</span>
                      <span className="tag">PostgreSQL</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Heart className="text-red-400" size={18} />
                      Specializations
                    </h4>
                    <div className="card-tags">
                      <span className="tag">Artificial Intelligence</span>
                      <span className="tag">Machine Learning</span>
                      <span className="tag">Cloud Computing</span>
                      <span className="tag">Full-Stack Development</span>
                      <span className="tag">System Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
