import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites that convert visitors into customers",
      icon: "🌐",
      price: "Starting from ₹25,000"
    },
    {
      title: "Mobile App Development", 
      desc: "Native and cross-platform mobile apps for iOS and Android",
      icon: "📱",
      price: "Starting from ₹50,000"
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and migration services",
      icon: "☁️",
      price: "Starting from ₹15,000"
    },
    {
      title: "AI Integration",
      desc: "Intelligent automation and AI-powered solutions",
      icon: "🤖",
      price: "Starting from ₹75,000"
    }
  ];

  return (
    <section id="services" className="p-8 md:p-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <div className="text-blue-600 font-bold">{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;