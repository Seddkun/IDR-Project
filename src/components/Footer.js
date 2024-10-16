// src/components/Footer.js
import React from 'react';
import './Footer.css';  // Asegúrate de crear el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 InspireDR. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
