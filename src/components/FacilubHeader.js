// src/components/Header/FacilubHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FacilubHeader.css';

const FacilubHeader = () => {
  return (
    <header className="facilub-header">
      <h1>Bienvenido a Ubicar Facil</h1>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/SobreNosotros">Sobre nosotros</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default FacilubHeader;
