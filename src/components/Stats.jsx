import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const targetValues = {
      clients: 500,
      projects: 1200,
      years: 8,
      satisfaction: 99
    };

    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          clients: Math.floor(targetValues.clients * progress),
          projects: Math.floor(targetValues.projects * progress),
          years: Math.floor(targetValues.years * progress),
          satisfaction: Math.floor(targetValues.satisfaction * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, stepTime);
    };

    animateCounters();
  }, []);

  return (
    <section className="p-12 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        <div>
          <div className="text-5xl font-bold text-blue-400 mb-2">{counters.clients}+</div>
          <div className="text-xl">Happy Clients</div>
        </div>
        <div>
          <div className="text-5xl font-bold text-green-400 mb-2">{counters.projects}+</div>
          <div className="text-xl">Projects Completed</div>
        </div>
        <div>
          <div className="text-5xl font-bold text-yellow-400 mb-2">{counters.years}+</div>
          <div className="text-xl">Years Experience</div>
        </div>
        <div>
          <div className="text-5xl font-bold text-purple-400 mb-2">{counters.satisfaction}%</div>
          <div className="text-xl">Satisfaction Rate</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
