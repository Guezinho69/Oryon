import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Activities from './components/Activities';
import WhyUs from './components/WhyUs';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Destinations />
      <Activities />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;