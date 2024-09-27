import React from 'react';
import './FacilubFooter.css';
import { Link } from 'react-router-dom';

const FacilubFooter = () => {
  return (
    <footer className="footer">
      <hr className="footer-line" /> {/* Línea horizontal */}
      <p className="rights">&copy; 2024 Facilub. Todos los derechos reservados.</p>
      <nav>
        <ul className="navbar">
        <li><Link to="PoliticaDePrivacidad">Política de privacidad</Link></li>
          <li><Link to="/TerminosYServicios">Términos de servicio</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>

        </ul>
      </nav>
    </footer>
  );
};

export default FacilubFooter;

