import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio'; 
import Stats from './components/Stats';
import Testimonials from './components/Testimonals';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navigation />
      <Header />
      <Features />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
