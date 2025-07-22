import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header id="home" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 pt-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className={`relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Welcome to TechNexa
        </h1>
        <p className="mt-2 text-xl font-light">Build Smarter. Move Faster. Scale Better.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Get Started Today
        </button>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"></div>
    </header>
  );
};

export default Header;
