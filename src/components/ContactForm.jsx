import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="p-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Get In Touch</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Ready to transform your business? Let's discuss how TechNexa can help you achieve your goals.
      </p>
      
      {isSubmitted && (
        <div className="max-w-xl mx-auto mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
          ✅ Thank you! Your message has been sent successfully.
        </div>
      )}
      
      <div className="max-w-xl mx-auto space-y-6">
        <div>
          <input 
            className="w-full border-2 border-gray-200 p-4 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
            placeholder="Your Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input 
            className="w-full border-2 border-gray-200 p-4 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
            placeholder="Email Address" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea 
            className="w-full border-2 border-gray-200 p-4 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none" 
            placeholder="Tell us about your project..." 
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button 
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
