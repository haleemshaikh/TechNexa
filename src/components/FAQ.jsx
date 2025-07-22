import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How long does it take to develop a website?",
      answer: "Typically 2-6 weeks depending on complexity and requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support and maintenance packages for all our projects."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies like React, Node.js, Python, and cloud platforms."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can take over, upgrade, or maintain existing projects."
    }
  ];

  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4">
            <button 
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              className="w-full text-left p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex justify-between items-center"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-2xl">{openFAQ === idx ? '−' : '+'}</span>
            </button>
            {openFAQ === idx && (
              <div className="mt-2 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;