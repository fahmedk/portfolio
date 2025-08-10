'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Users, Calendar, Brain, Zap, Globe, FolderOpen, Star, Database, Cloud } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Life Balance',
      description: 'Booking platform for a fitness club, financial advising, and cooking lessons. Built with MERN + AWS.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
      features: [
        'Unified scheduling experience',
        'DB schema and diagrams for complex booking',
        'AWS-backed recommendations and deployment'
      ],
      githubUrl: 'https://github.com/orgs/datasheng/teams/home-flavor-finance-fuel-fight-club',
      icon: Zap,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Qafilah',
      description: 'Django e‑commerce for fragrances with Stripe payments and robust catalog.',
      technologies: ['Django', 'Python', 'Stripe', 'HTML', 'CSS'],
      features: [
        'Secure checkout with Stripe',
        'Catalog and product management',
        'Deployed and handled real users'
      ],
      githubUrl: 'https://github.com/fahmedk/qafilah',
      icon: Globe,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Rent Roomie',
      description: 'Roommate and housing matching with a serverless AWS backend and recommendations.',
      technologies: ['Next.js', 'Express', 'TensorFlow', 'AWS', 'DynamoDB', 'Cognito', 'S3'],
      features: [
        'Dual flows for seekers and listers',
        'Serverless backend with AWS Lambda/API Gateway',
        'Lightweight recommendation engine'
      ],
      githubUrl: 'https://github.com/Fahim8230/RentRoomie',
      icon: Brain,
      gradient: 'from-blue-500 to-purple-600'
    },
  ];

  const additionalProjects: never[] = [];

  return (
    <section id="projects" className="section"
    style={{
      display: 'block',          // override .section flex
      minHeight: 'auto',         // override 100vh
      paddingTop: '1rem',
      paddingBottom: '0.5rem',
      marginTop: '-1rem',
      scrollMarginTop: '120px',  // ensure proper scroll offset
    }}>

      <div className="container">
        <div className="fade-in-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of <span className="active-pill">projects</span> I built.
          </p>
          
          {/* Featured Projects */}
          <div className="grid grid-3 gap-8 mb-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="project-card">
                  <div className={`project-image bg-gradient-to-br ${project.gradient}`}>
                    <IconComponent size={48} />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {(project.features || []).slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="card-tags mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tag text-xs">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                      {/* Removed demoUrl as it's not in the new projects */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* No additional projects; show only one row of three cards */}
          
          {/* CTA Section */}
          <div className="text-center mt-6" style={{ display: 'none' }}>
            <div className="card max-w-2xl mx-auto">
              <h3 className="card-title">Want to see more?</h3>
              <p className="text-gray-400 mb-6">
                Check out my GitHub profile for more projects, contributions, and open-source work.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/fahmedk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Github size={20} />
                  View GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/furqan-a-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
