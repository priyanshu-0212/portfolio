import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Clean Code', description: 'Writing maintainable and readable code.', icon: '🧹' },
  { title: 'Creative Design', description: 'Designing visually appealing interfaces.', icon: '🎨' },
  { title: 'Fast Performance', description: 'Optimizing for speed and efficiency.', icon: '⚡' },
  { title: 'User Focused', description: 'Building user-centric applications.', icon: '👥' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black text-white">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mb-12 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a passionate front-end developer with a strong focus on building modern, performant, and user-centric web applications. I enjoy transforming ideas into beautiful, intuitive digital experiences and thrive on solving complex problems with clean, creative solutions.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="p-6 bg-gradient-to-br from-purple-700 to-pink-600 rounded-xl cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 15px rgba(219, 39, 119, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;