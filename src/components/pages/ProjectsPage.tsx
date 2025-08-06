'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Users, Calendar, Brain, Zap, Globe, FolderOpen, Star, Database, Cloud } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Rent Roomie',
      description: 'A comprehensive roommate-matching platform with AI-powered recommendations',
      technologies: ['Next.js', 'Express', 'React', 'TensorFlow', 'AWS', 'API Gateway', 'DynamoDB', 'Cognito', 'S3'],
      highlights: [
        'Built dual user flows for roommate seekers and housing providers',
        'Developed fully serverless backend using AWS Lambda and API Gateway',
        'Trained recommendation engine with 85% match satisfaction in user testing',
        'Implemented real-time messaging and scalable authentication'
      ],
      githubUrl: 'https://github.com/fahmedk',
      icon: Brain,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Interview Prep AI-Agent',
      description: 'Built with Flask + UVicorn, this Telegram bot generates coding challenges and provides personalized feedback.',
      longDescription: 'An intelligent interview preparation system that helps developers practice coding challenges with AI-powered feedback and guidance.',
      technologies: ['Flask', 'OpenAI', 'MongoDB', 'Docker', 'GCP'],
      features: [
        'AI-generated coding challenges',
        'Personalized feedback and hints',
        'Progress tracking and analytics',
        'Telegram bot integration',
        'Automated email alerts via SendGrid'
      ],
      githubUrl: 'https://github.com/fahmedk',
      icon: Zap,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Patient Analyzer (P.AI)',
      description: 'Built an AI-driven patient analysis platform for medical professionals and researchers.',
      longDescription: 'A comprehensive healthcare analytics platform that streamlines patient discovery by enabling quick access to insights and interactive document analysis.',
      technologies: ['React', 'Next.js', 'Redux', 'TailwindCSS'],
      features: [
        'AI-powered patient data analysis',
        'Interactive document processing',
        'Medical professional dashboard',
        'Real-time insights and recommendations',
        'Secure patient data handling'
      ],
      githubUrl: 'https://github.com/fahmedk',
      demoUrl: '#',
      icon: Globe,
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const additionalProjects = [
    {
      title: 'GitHub Commit Analyzer',
      description: 'Processes and visualizes 100+ commits across multiple repositories to provide insights into coding patterns and development workflows.',
      technologies: ['Python', 'Flask', 'MongoDB', 'GitHub API']
    },
    {
      title: 'Resume Keyword Analyzer',
      description: 'Helps job seekers optimize their resumes by analyzing job descriptions and identifying key missing keywords.',
      technologies: ['Python']
    },
    {
      title: 'Learnify',
      description: 'A proof-of-concept testing page showcasing modern web development practices and UI/UX principles.',
      technologies: ['Next.js', 'React', 'Vercel']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="fade-in-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            From <span className="text-yellow-400">passion projects</span> to quick builds.
          </p>
          
          {/* Featured Projects */}
          <div className="grid grid-3 gap-8 mb-16">
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
                        {(project.features || project.highlights || []).slice(0, 3).map((feature, idx) => (
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
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={16} />
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Projects */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Additional Projects</h3>
            <div className="grid grid-3 gap-6">
              {additionalProjects.map((project, index) => (
                <div key={index} className="card">
                  <h4 className="card-title text-lg">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="card-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tag text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://github.com/fahmedk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
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
