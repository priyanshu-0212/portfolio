import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-primary">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-gradient">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-primary-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Welcome to My
              <span className="text-gradient block">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A passionate developer creating amazing digital experiences with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">View My Work</button>
              <button className="btn-secondary">Get In Touch</button>
            </div>
          </div>
        </section>

        {/* Placeholder sections for future development */}
        <section id="about" className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Section</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>

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
