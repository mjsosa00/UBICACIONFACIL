import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ComponenteReactivo.css';

const ComponentReactivo = () => {
  const { titulo } = useParams();
  const [card, setCard] = useState(null); // Estado local para almacenar la tarjeta
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    const fetchData = async () => {
      try {
        const response = await fetch('/gastronomia.json'); // Ruta al archivo JSON
        const data = await response.json(); // Parsear la respuesta a JSON
        const foundCard = data.find(item => item.titulo); // Buscar la tarjeta según el ID

        setCard(foundCard);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      } finally {
        setLoading(false); // Terminar la carga
      }
    };

    fetchData();
  }, [titulo]);

  if (loading) {
    return <div>Cargando...</div>; // Mensaje de carga mientras se obtiene el card
  }

  if (!card) {
    return <div>No se encontró el contenido para este ID.</div>; // Si no se encuentra el card
  }

  const images = card.imagenes ? card.imagenes.map((img) => ({
    original: img,
    thumbnail: img,
  })) : [{
    original: card.imagen,
    thumbnail: card.imagen
  }];

  return (
    <div>
      <div id='contenedor-images'>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          autoPlay={true}
          infinite={true}
          thumbnailPosition="left"
        />
      </div>
      <br />
      <div id='contenedor-titulo'>
        <h1 id='titulo-articulo'>{card.titulo}</h1>
      </div>
      <br />
      <div id='contenedor-items'>
        <div id='div-telefono'>
          <h2 id='texto-telefono'>Teléfono</h2>
          <h2 id='telefono'>{card.Telefono}</h2>
        </div>
        <div id='div-horario'>
          <h2 id='texto-horario'>Horarios</h2>
          <h2 id='Horario'>{card.horario}</h2>
        </div>
      </div>
      <br />
      <div id='contenedor-parrafo1'>
        <p id='parrafo-articulo1'>{card.texto}</p>
      </div>
      <br />
      <div id='contenedor-como-llegar'>
        <br />
        <h2>¿Cómo llegar?</h2>
        <br />
        <iframe id='mapa' src={card.href} title="Mapa"></iframe>
      </div>
      <br /><br />
    </div>
  );
};

export default ComponentReactivo;
