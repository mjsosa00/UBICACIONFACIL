// src/components/Header/FacilubHeader.js
import React from 'react';
import './FacilubHeader.css';

const FacilubHeader = () => {
  return (
    <header className="facilub-header">
              <h1>Bienvenido a Ubicar Facil</h1>
      <nav>
        <ul className="navbar">
          <li><a href="index.asp">Inicio</a></li>
          <li><a href="index.asp">Sobre nosotros</a></li>
          <li><a href="contacto.js">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default FacilubHeader;
