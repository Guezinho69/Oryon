import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="hamburger">
          <img src="/images/icons/hamburger.png" alt="Menu" onClick={toggleMenu} />
        </div>
        <div className="logo">
          <span className="logo-part1">Oryon</span>
          <span className="logo-part2">EVG</span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#activities">Activités</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#quote">Devis</a></li>
        </ul>
        <div className="nav-right">
          <div className="phone">
            <img src="/images/icons/Telephone.png" alt="Phone" />
            <span>01 76 21 57 30</span>
          </div>
          <a href="#" className="login-btn">
            <img src="/images/icons/user.png" alt="Connexion" />
            Connexion
          </a>
        </div>
      </nav>
      <div className="top-bar">
        <p>Le Meilleur Organisateur d’EVG en France depuis 2024</p>
      </div>
    </header>
  );
}

export default Navbar;