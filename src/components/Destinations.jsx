import React from 'react';

function Destinations() {
  const destinations = [
    { name: 'Budapest', img: '/images/budapest.webp' },
    { name: 'Bogotá', img: '/images/Bogota.jpg' },
    { name: 'Buenos Aires', img: '/images/Bueno.jpg' },
    { name: 'Amsterdam', img: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg' },
    { name: 'Barcelone', img: '/images/barcelone.webp' },
    { name: 'Prague', img: '/images/prague.jpg'},
  ];

  return (
    <section className="destinations" id="destinations">
      <h2>Top Destinations EVG</h2>
      <p className="destinations-intro">
        Avec plus de 6 destinations à travers l’Europe et l’Amérique latine, Oryon a sélectionné les villes les plus festives pour votre enterrement de vie de garçon.
      </p>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-card">
            <img src={dest.img} alt={dest.name} />
            <div className="card-overlay">
              <h3>{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="floating-btn">Prendre RDV</a>
    </section>
  );
}

export default Destinations;