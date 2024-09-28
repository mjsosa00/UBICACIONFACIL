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
           
            <span role="img" aria-label="ubicación"></span>
            <br></br>
            <button class="boton" onClick={() => window.open(ref.href, "_blank", "noopener,noreferrer")}>
        <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                </svg>
                 Como llegar
                </button>
           
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;
