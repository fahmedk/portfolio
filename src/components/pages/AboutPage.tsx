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
            Who I am off the keyboard.
          </p>
          
          <div className="grid grid-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div className="fade-in-left">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I’m off the keyboard, I’m usually meeting people. I like hopping between
                  communities in tech, art, culture, and local meetups, trading stories and ideas.
                  Hearing what people are building, learning, and dreaming about keeps me curious
                  and grounded.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  I love big conversations about how we live and what matters. Coffee chats,
                  long walks, late-night debates — I’m in. I listen first, ask good questions,
                  and learn a lot from different perspectives.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  That curiosity shows up in my work too. I try to build with empathy, keep things
                  simple, and ship thoughtfully. If we meet, I’ll probably ask what you’re tinkering
                  with and what you can’t stop thinking about.
                </p>
                
                
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
