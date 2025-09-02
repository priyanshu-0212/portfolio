import React from 'react';
import './App.css';
import AnimatedCursor from './components/AnimatedCursor';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import { handleNavClick } from './utils/smoothScroll';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-primary">
      <AnimatedCursor />
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-gradient">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-700 hover:text-primary-600 transition-colors">Projects</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        <section id="projects" className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects Section</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>

        <section id="contact" className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Section</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p>&copy; 2024 Portfolio. Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
