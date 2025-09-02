import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AboutSection: React.FC = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);
  const [skillsProgress, setSkillsProgress] = useState({
    react: 0,
    javascript: 0,
    css: 0,
    node: 0,
  });

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Animate counters
      const projectsTarget = 25;
      const hoursTarget = 1500;

      const projectsInterval = setInterval(() => {
        setProjectsCount((prev) => {
          if (prev >= projectsTarget) {
            clearInterval(projectsInterval);
            return projectsTarget;
          }
          return prev + 1;
        });
      }, 50);

      const hoursInterval = setInterval(() => {
        setHoursCount((prev) => {
          if (prev >= hoursTarget) {
            clearInterval(hoursInterval);
            return hoursTarget;
          }
          return prev + 10;
        });
      }, 10);

      // Animate skills
      const skillsInterval = setInterval(() => {
        setSkillsProgress((prev) => ({
          react: prev.react >= 90 ? 90 : prev.react + 2,
          javascript: prev.javascript >= 85 ? 85 : prev.javascript + 2,
          css: prev.css >= 80 ? 80 : prev.css + 2,
          node: prev.node >= 75 ? 75 : prev.node + 2,
        }));
      }, 50);

      return () => {
        clearInterval(projectsInterval);
        clearInterval(hoursInterval);
        clearInterval(skillsInterval);
      };
    }
  }, [isInView]);

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Anshika Singh
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Animated Profile Card */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.img
                src="https://avatars.githubusercontent.com/u/anshikaxaa?v=4"
                alt="Anshika Singh"
                className="w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Front-End Developer | Final Year Engineering Student
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I’m a passionate front-end developer with a strong interest in building modern, responsive, and visually engaging web applications. Currently in my final year of engineering, I’ve been sharpening my skills in React.js, Tailwind CSS, JavaScript (ES6+), and TypeScript while also exploring backend technologies like Node.js and Express.
              </motion.p>
              <motion.p
                className="text-gray-600 leading-relaxed mt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                My work spans from creating interactive portfolio websites and real-time web apps to building AI-powered tools like resume analyzers and placement prediction systems. I enjoy bringing ideas to life through code, experimenting with animations, and designing experiences that feel smooth and intuitive.
              </motion.p>
              <motion.p
                className="text-gray-600 leading-relaxed mt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Beyond coding, I focus on problem-solving (LeetCode & DSA), contributing to open-source style projects, and continuously learning new technologies. My goal is to create impactful digital experiences and grow into a versatile full-stack developer.
              </motion.p>
            </div>
          </motion.div>

          {/* Fun Counters */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-xl text-white text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h4
                className="text-3xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {projectsCount}+
              </motion.h4>
              <p className="text-sm opacity-90">Projects Completed</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-xl text-white text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h4
                className="text-3xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {hoursCount}+
              </motion.h4>
              <p className="text-sm opacity-90">Hours Coding</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Skill Showcase */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'React', value: skillsProgress.react, color: '#61DAFB' },
              { name: 'JavaScript', value: skillsProgress.javascript, color: '#F7DF1E' },
              { name: 'CSS', value: skillsProgress.css, color: '#1572B6' },
              { name: 'Node.js', value: skillsProgress.node, color: '#339933' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <div className="w-20 h-20 mb-4">
                  <CircularProgressbar
                    value={skill.value}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      textColor: skill.color,
                      pathColor: skill.color,
                      trailColor: '#d6d6d6',
                      textSize: '16px',
                    })}
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact & Social Links */}
        <motion.div
          className="mt-12 text-center space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://github.com/anshikaxaa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anshikaxaa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="mailto:anshikaxaaa@gmail.com" className="text-blue-600 hover:underline">
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
