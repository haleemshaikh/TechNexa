import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white p-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">TechNexa</h3>
          <p className="text-gray-300">Building the future, one solution at a time.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Cloud Solutions</li>
            <li>AI Integration</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <span className="text-2xl hover:text-blue-400 cursor-pointer">📧</span>
            <span className="text-2xl hover:text-blue-400 cursor-pointer">📱</span>
            <span className="text-2xl hover:text-blue-400 cursor-pointer">🌐</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>© 2025 TechNexa. All rights reserved. Made with ❤️ in India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
