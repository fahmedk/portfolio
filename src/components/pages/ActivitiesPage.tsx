'use client';

import { motion } from 'framer-motion';
import { Users, Award, Calendar, Heart } from 'lucide-react';

export default function ActivitiesPage() {
  const activities = [
    {
      title: 'Muslim Student Association (MSO)',
      role: 'President',
      period: 'December 2022 – May 2025',
      description: 'Leading a diverse community of students in fostering Islamic values, organizing cultural events, and promoting interfaith dialogue on campus.',
      responsibilities: [
        'Organize weekly community gatherings and educational workshops',
        'Coordinate interfaith dialogue sessions with other religious organizations',
        'Manage budget and resources for community events and activities',
        'Represent the Muslim student body in university-wide initiatives',
        'Mentor new members and facilitate leadership development'
      ],
      icon: Users,
      color: 'bg-green-100 border-green-300'
    },
    {
      title: 'Association of Computing Machinery (ACM)',
      role: 'Active Member',
      period: 'September 2022 – May 2025',
      description: 'Participating in the world\'s largest educational and scientific computing society, engaging in professional development and technical advancement.',
      responsibilities: [
        'Attend technical workshops and coding competitions',
        'Participate in hackathons and programming challenges',
        'Engage in peer learning and knowledge sharing sessions',
        'Network with industry professionals and fellow students',
        'Contribute to open-source projects and collaborative initiatives'
      ],
      icon: Award,
      color: 'bg-blue-100 border-blue-300'
    }
  ];

  return (
    <div className="h-full p-6 ancient-text overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="ancient-title text-5xl mb-8 text-center">
          <span className="illuminated-letter">E</span>xtracurricular Activities
        </h1>

        <div className="space-y-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="ornamental-border p-8 bg-gradient-to-br from-amber-50 to-amber-100 page-curl"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-amber-600 p-4 rounded-full flex-shrink-0">
                    <IconComponent className="text-amber-100" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-6">
                      <h2 className="ancient-subtitle text-3xl mb-2">{activity.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className={`px-4 py-2 rounded-full text-lg font-semibold border-2 ${activity.color}`}>
                          {activity.role}
                        </span>
                        <div className="flex items-center gap-2">
                          <Calendar className="text-amber-600" size={20} />
                          <span className="text-lg">{activity.period}</span>
                        </div>
                      </div>
                      <p className="text-xl text-amber-800 leading-relaxed">{activity.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Heart className="text-amber-600" size={24} />
                        <h4 className="ancient-subtitle text-xl">Key Responsibilities</h4>
                      </div>
                      
                      <div className="grid gap-3">
                        {activity.responsibilities.map((responsibility, respIndex) => (
                          <motion.div
                            key={respIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 + respIndex * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600"
                          >
                            <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="text-lg leading-relaxed">{responsibility}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 ornamental-border p-6 bg-gradient-to-br from-amber-50 to-amber-100 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-amber-600" size={28} />
            <h3 className="ancient-subtitle text-2xl">Leadership & Community</h3>
          </div>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Through my extracurricular involvement, I have developed strong leadership skills, cultural awareness, 
            and a deep commitment to community service. These experiences have shaped my ability to work 
            collaboratively, think inclusively, and lead with empathy and purpose.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
