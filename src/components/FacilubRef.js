import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Si no usas CDN
import { FaLocationDot } from "react-icons/fa6";
const FacilubRef = ({ referencia }) => {
  return (
    <div className="facilub-ref">
      <h3>{referencia.titulo}</h3>
      <p className="descripcion">{referencia.texto}</p>
      <img src={referencia.imagen} alt={referencia.titulo} />
      <div className="ubicacion">
        <FaLocationDot />
        <a href={referencia.href} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
      </div>
    </div>
  );
};

export default FacilubRef;


