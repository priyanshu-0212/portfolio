import React from 'react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'React', value: 90 },
  { name: 'TypeScript', value: 85 },
  { name: 'Node.js', value: 80 },
  { name: 'Python', value: 75 },
  { name: 'UI/UX Design', value: 85 },
  { name: 'Git', value: 80 },
  { name: 'Figma', value: 80 },
  { name: 'Tailwind CSS', value: 80 },
  { name: 'Express.js', value: 75 },
];

const tools = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Git', 'Figma', 'Tailwind CSS', 'Express.js'
];


const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container-custom max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Proficiency */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technologies & Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-purple-700 hover:bg-purple-600 cursor-default transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Certificates Section */}
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4">Certificates</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://drive.google.com/drive/u/0/folders/1nJ0Gf7FA56kglAOQAiybBBZn333pdq5H" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:scale-105 transition">JavaScript (HackerRank)</a>
            <a href="https://drive.google.com/drive/u/0/folders/1SfH7ah5BUosaW-57m-H21YyC23MIaHyz" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:scale-105 transition">Machine Learning (NPTEL)</a>
            <a href="https://drive.google.com/drive/u/0/folders/1dEOUt5GC5noP8Vhk5afLePSOD7CyGynQ" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:scale-105 transition">DBMS (NPTEL)</a>
            <a href="https://drive.google.com/drive/u/0/folders/18cJ88uPGm-3XilSyPpHDGQv3WU7s_y0K" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:scale-105 transition">Java (HackerRank)</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
