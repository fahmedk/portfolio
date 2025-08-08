'use client';

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Calendar } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ display: 'none' }}>
      <div className="container">
        <div className="fade-in-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect and build something amazing together.
          </p>
          
          <div className="grid md:grid-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="card">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email</h4>
                        <a 
                          href="mailto:furqankhan.cs@gmail.com" 
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          furqankhan.cs@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Phone</h4>
                        <a 
                          href="tel:+19293004276" 
                          className="text-green-400 hover:text-green-300 transition-colors"
                        >
                          (929) 300-4276
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Location</h4>
                        <span className="text-purple-400">Atlanta, Georgia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Connect Online</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/fahmedk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Github className="text-white" size={20} />
                    <span className="text-white font-medium">GitHub</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/furqan-a-khan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <Linkedin className="text-white" size={20} />
                    <span className="text-white font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form / CTA */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="card-title">Let's Work Together</h3>
                <p className="text-gray-400 mb-6">
                  I'm always interested in hearing about new opportunities, 
                  exciting projects, and connecting with fellow developers and innovators.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageCircle className="text-blue-400" size={20} />
                      <h4 className="text-white font-medium">Open to Opportunities</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Currently seeking full-time opportunities in AI/ML, cloud computing, and software engineering.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="text-green-400" size={20} />
                      <h4 className="text-white font-medium">Available for Consulting</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Available for freelance projects and technical consulting in web development and AI solutions.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="mailto:furqankhan.cs@gmail.com?subject=Let's Connect - Portfolio Inquiry"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Send size={20} />
                    Send Me a Message
                  </a>
                </div>
              </div>
              
              {/* Quick Response Note */}
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">
                  ✨ I typically respond within 24 hours. Looking forward to connecting with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
