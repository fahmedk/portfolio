'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="h-full p-6 ancient-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="ancient-title text-5xl mb-8 text-center">
          <span className="illuminated-letter">E</span>ducational Journey
        </h1>

        <div className="space-y-8">
          {/* Georgia Tech */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ornamental-border p-8 bg-gradient-to-br from-amber-50 to-amber-100 page-curl"
          >
            <div className="flex items-start gap-6">
              <div className="bg-amber-600 p-4 rounded-full">
                <GraduationCap className="text-amber-100" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="ancient-subtitle text-3xl mb-2">Georgia Institute of Technology</h2>
                <h3 className="text-2xl text-amber-800 mb-4 font-semibold">Master of Science in Computer Science</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-amber-600" size={20} />
                    <span className="text-lg">Graduating May 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-amber-600" size={20} />
                    <span className="text-lg">Atlanta, Georgia</span>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  Currently pursuing advanced studies in Computer Science at one of the nation's premier 
                  technological institutions, focusing on artificial intelligence, machine learning, and 
                  cutting-edge software engineering practices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CCNY */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="ornamental-border p-8 bg-gradient-to-br from-amber-50 to-amber-100 page-curl"
          >
            <div className="flex items-start gap-6">
              <div className="bg-amber-600 p-4 rounded-full">
                <GraduationCap className="text-amber-100" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="ancient-subtitle text-3xl mb-2">City College of New York</h2>
                <h3 className="text-2xl text-amber-800 mb-4 font-semibold">Bachelor of Science in Computer Science</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-amber-600" size={20} />
                    <span className="text-lg">Graduated May 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-amber-600" size={20} />
                    <span className="text-lg">New York, NY</span>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                  Completed comprehensive undergraduate studies in Computer Science, building a strong 
                  foundation in theoretical concepts and practical applications of computing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Relevant Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="ornamental-border p-8 bg-gradient-to-br from-amber-50 to-amber-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="text-amber-600" size={32} />
              <h2 className="ancient-subtitle text-3xl">Relevant Coursework</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Artificial Intelligence',
                'Machine Learning',
                'Operating Systems',
                'Data Structures & Algorithms',
                'Object Oriented Programming'
              ].map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-amber-100 p-4 rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-amber-800">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
