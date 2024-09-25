import React from 'react';
import './FacilubFooter.css';

const FacilubFooter = () => {
  return (
    <footer className="footer">
     <h1 className='puto'>&copy; 2024 Facilub. Todos los derechos reservados.</h1>
      <nav>
        <ul className='navbar'>
          <li><a href='index.asp'>Política de privacida</a>d</li>
          <li><a href='index.asp'>Términos de servicio</a></li>
          <li><a href='index.asp'>Contacto</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default FacilubFooter;