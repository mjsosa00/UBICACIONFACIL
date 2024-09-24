import React, { useEffect, useRef, useState  } from 'react';
import './FacilubCarrusel.css';
import FacilubRef from './FacilubRef';
import fetchData from '../services/referencias';

const Carrusel = () => {
  const carruselRef = useRef(null);

  const [referencias, setReferencias] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setReferencias(data); // Asigna los datos obtenidos al estado
    };

    getData();
  }, []);

  const scrollIzquierda = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: -432, behavior: 'smooth' });
    }
  };

  const scrollDerecha = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: 432, behavior: 'smooth' });
    }
  };

  return (
    <div className="carrusel-container">
     
      <div className="carrusel" ref={carruselRef}>
        {referencias.map((ref, index) => (
          <div key={index} className="carrusel-item"> 
            <FacilubRef referencia={ref} />
          </div>
        ))}
      </div>
      <div className='carrusel-botonera'>
            <button onClick={scrollIzquierda}>&lt;</button>
            <button onClick={scrollDerecha}>&gt;</button>
      </div>
    </div>
  );
};

export default Carrusel;
