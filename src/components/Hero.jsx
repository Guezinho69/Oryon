import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="/videos/15 Minute Video.mp4" type="video/mp4" /> {/* Placeholder */}
        {/* Remplace par ta vidéo */}
      </video>
      <div className="hero-content">
        <h1>Oryon : Ton EVG, Ta Légende</h1>
        <p>Des destinations épiques, des expériences inoubliables</p>
        <a href="#" className="cta-btn">Découvre ton aventure</a>
      </div>
    </section>
  );
}

export default Hero;