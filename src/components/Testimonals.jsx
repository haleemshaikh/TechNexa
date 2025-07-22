import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TechStart India",
      text: "TechNexa transformed our business completely. Their solutions are incredible!",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "Digital Solutions Ltd",
      text: "Outstanding service and support. Highly recommend TechNexa to everyone.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      company: "Innovation Hub",
      text: "The best tech partner we've ever worked with. Simply amazing results!",
      rating: 5
    }
  ];

  return (
    <section className="p-12 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
            <div>
              <div className="font-bold text-gray-800">{testimonial.name}</div>
              <div className="text-blue-600 text-sm">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;