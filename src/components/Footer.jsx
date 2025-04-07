import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Oryon</h3>
          <p>Organisateur d’EVG inoubliables depuis 2025</p>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#activities">Activités</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#quote">Devis</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : contact@oryon-evg.com</p>
          <p>Tél : +33 1 23 45 67 89</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Oryon - Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;