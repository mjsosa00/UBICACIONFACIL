import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fetchData from '../services/referencias'; // Ajusta esta ruta si es necesario
import 'bootstrap/dist/css/bootstrap.min.css';
import './FacilubCarrusel.css';
import { CiLocationOn } from "react-icons/ci";

const Carrusel = () => {
  const [referencias, setReferencias] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setReferencias(data);
    };

    getData();
  }, []);

  return (
    <Carousel>
      {referencias.map((ref, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={ref.imagen}
            alt={ref.titulo}
          />
          <Carousel.Caption>
            <h5>{ref.titulo}</h5>
            <p>{ref.texto}</p>
            <CiLocationOn />
            <span role="img" aria-label="ubicación"></span>
            <br></br>
            <a href={ref.href} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;
