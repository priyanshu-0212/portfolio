import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    title: 'SRM Institute of Science & Technology',
    period: '2022–2026',
    description: 'B.Tech CSE (CGPA: 9.18)',
  },
  {
    title: 'Seth M.R. Jaipuria School',
    period: '2019–2021',
    description: 'Intermediate (76%)',
  },
  {
    title: 'Vanita Public School',
    period: '2018–2019',
    description: 'Matriculation (76%)',
  },
];

const certificates = [
  'JavaScript (HackerRank)',
  'Machine Learning (NPTEL)',
  'DBMS (NPTEL)',
  'Java (HackerRank)',
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
      <div className="container-custom max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education & Experience
        </motion.h2>

        <div className="relative border-l-4 border-purple-600 ml-4 pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              className="mb-10 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-7 top-1 w-5 h-5 bg-purple-600 rounded-full border-4 border-indigo-900"></div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="text-sm text-purple-300">{item.period}</span>
              <p className="mt-1 text-purple-200">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Certificates</h3>
          <ul className="flex flex-wrap justify-center gap-6">
            {certificates.map((cert) => (
              <li
                key={cert}
                className="bg-purple-700 px-4 py-2 rounded-full text-white cursor-default"
              >
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
