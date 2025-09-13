import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Portfolio',
    description: 'A personal portfolio website built with React.js, Tailwind, and Framer Motion.',
    tech: ['React.js', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/anshikaxaa/portfolio',
    live: 'https://portfolio-zeta-black-79j51o0e9h.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'ZenTasks',
    description: 'Task management app using React.js, Tailwind, and Howler.js for sound effects.',
    tech: ['React.js', 'Tailwind', 'Howler.js'],
    github: 'https://github.com/anshikaxaa/zentasks',
    live: 'https://zentasks-iota.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'CSS Playground',
    description: 'Interactive CSS playground built with React.js, TypeScript, and Tailwind.',
    tech: ['React.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/anshikaxaa/css-playground',
    live: 'https://css-playground-five.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'InsightCV',
    description: 'An AI-powered resume analyzer built with React.js, Tailwind CSS, Node.js, Express, pdfplumber, and Gemini API.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'Gemini API', 'pdfplumber'],
    github: 'https://github.com/anshikaxaa/PORTFOLIO',
    live: '#',
    category: 'Full Stack',
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
                  aria-label="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                  aria-label="Live Demo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
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
