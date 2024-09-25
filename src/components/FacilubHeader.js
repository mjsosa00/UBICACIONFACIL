import React from 'react';
import './FacilubHeader.css';

const FacilubHeader = () => {
  return (
    <header>
      <nav>
      <h1>Bienvenido a Ubicar Facil</h1>

      <ul className='navbar'>
          <li><a href='index.asp'>Inicio</a></li>
          <li><a href='index.asp'>Sobre nosotros</a></li>
          <li><a href='index.asp'>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default FacilubHeader;