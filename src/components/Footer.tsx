import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl font-bold text-pink-500 mb-2">Anshika Singh</div>
          <p className="text-sm mb-2 text-center md:text-left">Passionate full-stack developer creating beautiful, functional, and user-centered digital experiences.</p>
          <div className="mt-2 text-xs text-gray-400 flex items-center gap-1 mb-2">
            Made with <span className="text-pink-500">&#9825;</span> and &lt;/&gt; and lots of <span className="text-yellow-500">&#9749;</span>
          </div>
          <div className="italic text-xs text-gray-400 mt-2 text-center md:text-left">"Code is like humor. When you have to explain it, it's bad." - Cory House</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold mb-2">Quick Links</div>
          <a href="#home" className="hover:text-pink-400 transition">Home</a>
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#experience" className="hover:text-pink-400 transition">Experience</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="font-semibold mb-2">Let's Connect</div>
          <a href="mailto:anshikaxaaa@gmail.com" className="underline hover:text-pink-400">anshikaxaaa@gmail.com</a>
          <a href="tel:+919455365300" className="underline hover:text-pink-400">+91 9455365300</a>
          <div>Chennai, India</div>
          <div className="mt-2 text-xs">© 2025 Anshika.</div>
          <div className="mt-2">Follow me:
            <a href="https://github.com/anshikaxaa" className="ml-2 hover:text-pink-400" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/anshikaxaa/" className="ml-2 hover:text-pink-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
