'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C', 'C#', 'C++', 'JavaScript', 'TypeScript', 'Golang', 'SQL'],
      color: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      skills: ['React', 'React Native', 'Next.js', 'Django', 'Node.js', 'Express'],
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'Linux'],
      color: 'bg-purple-100 border-purple-300 text-purple-800'
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      skills: ['Firebase', 'REST API', 'HTML', 'CSS', 'Git', 'AI/ML'],
      color: 'bg-orange-100 border-orange-300 text-orange-800'
    }
  ];

  return (
    <div className="h-full p-6 ancient-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="ancient-title text-5xl mb-8 text-center">
          <span className="illuminated-letter">S</span>kills & Expertise
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="ornamental-border p-6 bg-gradient-to-br from-amber-50 to-amber-100 page-curl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <IconComponent className="text-amber-100" size={28} />
                  </div>
                  <h2 className="ancient-subtitle text-2xl">{category.title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${category.color}`}
                    >
                      <span className="font-semibold text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 ornamental-border p-6 bg-gradient-to-br from-amber-50 to-amber-100 text-center"
        >
          <h3 className="ancient-subtitle text-xl mb-4">Areas of Expertise</h3>
          <p className="text-lg leading-relaxed">
            My technical arsenal spans full-stack development, cloud computing, and artificial intelligence. 
            I specialize in building scalable web applications, implementing AI solutions, and architecting 
            cloud-native systems that drive innovation and efficiency.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
