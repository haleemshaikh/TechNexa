import React, { useState, useEffect } from 'react';

const Feature = ({ title, desc, icon, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="font-bold text-2xl mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    { 
      title: 'Lightning Fast', 
      desc: 'Optimized performance with cutting-edge technology for blazing speed.',
      icon: '⚡',
      delay: 100
    },
    { 
      title: 'Infinitely Scalable', 
      desc: 'Built to grow with your business from startup to enterprise.',
      icon: '🚀',
      delay: 200
    },
    { 
      title: 'Fort Knox Security', 
      desc: 'Military-grade security and protection for your valuable data.',
      icon: '🔒',
      delay: 300
    },
  ];

  return (
    <section id="features" className="p-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose TechNexa?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <Feature key={idx} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;
