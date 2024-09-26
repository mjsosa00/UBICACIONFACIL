import React from 'react';
import './FacilubFooter.css';

const FacilubFooter = () => {
  return (
    <footer className="footer">
      <hr className="footer-line" /> {/* Línea horizontal */}
      <p className="rights">&copy; 2024 Facilub. Todos los derechos reservados.</p>
      <nav>
        <ul className="navbar">
          <li><a href="privacy.html">Política de privacidad</a></li>
          <li><a href="terms.html">Términos de servicio</a></li>
          <li><a href="contact.html">Contacto</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default FacilubFooter;

