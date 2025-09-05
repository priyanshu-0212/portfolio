import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Portfolio',
    description: 'A personal portfolio website built with React.js, Tailwind, and Framer Motion.',
    tech: ['React.js', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/anshikaxaa/portfolio',
    live: 'https://dynamic-portfolio-we-s2a3.bolt.host/',
    category: 'Frontend',
  },
  {
    title: 'ZenTasks',
    description: 'Task management app using React.js, Tailwind, and Howler.js for sound effects.',
    tech: ['React.js', 'Tailwind', 'Howler.js'],
    github: 'https://github.com/anshikaxaa/zentasks',
    live: 'https://zentasks.example.com',
    category: 'Full Stack',
  },
  {
    title: 'CSS Playground',
    description: 'Interactive CSS playground built with React.js, TypeScript, and Tailwind.',
    tech: ['React.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/anshikaxaa/css-playground',
    live: 'https://cssplayground.example.com',
    category: 'Frontend',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Design'];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-gray-900 text-white">
      <div className="container-custom max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border-2 border-purple-600 ${
                filter === cat ? 'bg-purple-600 text-white' : 'text-purple-400 hover:bg-purple-700 hover:text-white'
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-700 px-2 py-1 rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
