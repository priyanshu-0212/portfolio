import React from 'react';
import './App.css';
import AnimatedCursor from './components/AnimatedCursor';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import { handleNavClick } from './utils/smoothScroll';

function App() {
  return (
    <div className="App min-h-screen bg-black text-white transition-colors duration-500">
      <AnimatedCursor />
      <header className="bg-black sticky top-0 z-50">
        <div className="container-custom flex items-center justify-between py-4">
          <div className="text-2xl font-bold cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
            Priyanshu 
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-pink-400 transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-pink-400 transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-pink-400 transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-pink-400 transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-pink-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
