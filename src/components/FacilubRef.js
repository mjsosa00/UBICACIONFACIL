import React from 'react';
import './FacilubRef.css';

const FacilubRef = ({ referencia }) => {
  return (
    <div className="facilub-ref">
      <h3>{referencia.titulo}</h3>
      <p className="descripcion">{referencia.texto}</p>
      <img src={referencia.imagen} alt={referencia.titulo} />
      <div className="ubicacion">
        <span role="img" aria-label="ubicación">📍</span>
        <a href={referencia.href} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
      </div>
    </div>
  );
};

export default FacilubRef;
