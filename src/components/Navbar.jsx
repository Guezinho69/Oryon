import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Oryon</div>
      <ul className="nav-links">
        <li><a href="#activities">Activités</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#quote">Devis</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;