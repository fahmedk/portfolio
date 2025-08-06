'use client';

import React from 'react';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

const ExperiencePage: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'AI/Cloud Engineer Intern',
      company: 'Wabtec Corporation',
      period: 'June 2024 - Present',
      location: 'New York, NY',
      description: 'Leading AI infrastructure development and cloud solutions for transportation industry.',
      achievements: [
        'Integrated advanced chatbot infrastructure using Amazon Bedrock, serving 20,000+ users',
        'Deployed containerized applications with Kubernetes, improving deployment efficiency by 25%',
        'Led stakeholder meetings to define AI implementation strategies and technical requirements',
        'Collaborated with cross-functional teams to optimize cloud-based solutions'
      ],
      technologies: ['AWS', 'Kubernetes', 'Amazon Bedrock', 'Docker', 'Python', 'AI/ML'],
      current: true
    },
    {
      title: 'Software Engineer Intern',
      company: 'The Hipe Network',
      period: 'Summer 2023',
      location: 'Remote',
      description: 'Developed full-stack web applications and user-centric digital solutions.',
      achievements: [
        'Developed full-stack web applications using React, Node.js, and MongoDB',
        'Implemented responsive UI/UX designs and optimized application performance',
        'Collaborated with design and product teams to deliver user-centric solutions',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
      current: false
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="fade-in-up">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Striving to develop impactful tech.
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card fade-in-up">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Column - Company Info */}
                  <div className="lg:w-1/3">
                    <div className="space-y-3">
                      <h3 className="card-title">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-400">
                        <Building size={18} />
                        <span className="font-medium">{exp.company}</span>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="card-meta">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Right Column - Details */}
                  <div className="lg:w-2/3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-medium mb-3">Technologies Used</h4>
                        <div className="card-tags">
                          {exp.technologies.map((tech: string, idx: number) => (
                            <span key={idx} className="tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Education</h3>
            <div className="grid md:grid-2 gap-6">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                    GT
                  </div>
                  <div className="flex-1">
                    <h4 className="card-title text-lg">Master of Science in Computer Science</h4>
                    <p className="text-blue-400 font-medium">Georgia Institute of Technology</p>
                    <div className="card-meta">
                      <span>Expected 2027</span>
                      <span>Atlanta, GA</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      Specializing in Machine Learning and Artificial Intelligence
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center text-white font-bold">
                    CCNY
                  </div>
                  <div className="flex-1">
                    <h4 className="card-title text-lg">Bachelor of Science in Computer Science</h4>
                    <p className="text-purple-400 font-medium">City College of New York</p>
                    <div className="card-meta">
                      <span>2025</span>
                      <span>New York, NY</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      Foundation in Computer Science and Software Engineering
                    </p>
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

export default ExperiencePage;
