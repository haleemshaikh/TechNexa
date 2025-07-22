import React, { useState } from 'react';

const Navigation = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    console.log(`Scrolling to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log(`Element found: ${element ? 'Yes' : 'No'}`);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-blue-600">TechNexa</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-blue-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">Contact</button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-gray-800 hover:bg-gray-700'} text-white transition-all duration-300 transform hover:scale-110`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-yellow-500' : 'bg-gray-800'} text-white`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className={`block px-3 py-2 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} w-full text-left`}>Home</button>
              <button onClick={() => scrollToSection('features')} className={`block px-3 py-2 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} w-full text-left`}>Features</button>
              <button onClick={() => scrollToSection('services')} className={`block px-3 py-2 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} w-full text-left`}>Services</button>
              <button onClick={() => scrollToSection('portfolio')} className={`block px-3 py-2 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} w-full text-left`}>Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className={`block px-3 py-2 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} w-full text-left`}>Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;