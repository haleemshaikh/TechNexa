import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack online store with payment integration",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Learning Management System",
      desc: "Educational platform for online courses",
      image: "📚", 
      tech: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      title: "Healthcare App",
      desc: "Patient management and telemedicine solution",
      image: "🏥",
      tech: ["React Native", "Firebase", "AI"]
    }
  ];

  return (
    <section id="portfolio" className="p-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl">
              {project.image}
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;