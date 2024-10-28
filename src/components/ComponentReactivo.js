import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ComponenteReactivo.css';

const ComponentReactivo = () => {
  const { titulo } = useParams();
  const [card, setCard] = useState(null); // Estado para almacenar el objeto encontrado
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar ambas peticiones de datos en paralelo
        const [gastronomiaResponse, hospedajeResponse, eventosResponse] = await Promise.all([
          fetch('/gastronomia.json'),
          fetch('/hospedaje.json'),
          fetch('/eventos.json')
        ]);

        // Convertir las respuestas a JSON
        const gastronomiaData = await gastronomiaResponse.json();
        const hospedajeData = await hospedajeResponse.json();
        const eventosData = await eventosResponse.json();

        // Buscar coincidencias en ambos conjuntos de datos
        const foundCard = [
          ...gastronomiaData.filter(item => item.titulo === titulo),
          ...hospedajeData.filter(item => item.titulo === titulo),
          ...eventosData.filter(item => item.titulo === titulo)

        ][0]; // Tomar la primera coincidencia si existe

        setCard(foundCard || null); // Actualizar estado con la coincidencia o dejar en null
      } catch (error) {
        console.error('Error al cargar los archivos JSON:', error);
      } finally {
        setLoading(false); // Finalizar carga
      }
    };

    fetchData();
  }, [titulo]);

  if (loading) {
    return <div>Cargando...</div>; // Mensaje de carga mientras se obtiene el card
  }

  if (!card) {
    return <div>No se encontró el contenido para este título.</div>; // Si no se encuentra el card
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
     
  

      <br />
      <div id='contenedor-titulo'>
        <h1 id='titulo-articulo'>{card.titulo}</h1>
      </div>
      <br />

      </div>

      
    {card.tipo == 'gastronomia' &&(

          <div className='div-tabla'> 
      <table className='tabla-items'>
          
             <tr>
            <th>Telefono</th>
            <td>{card.Telefono}</td>
        </tr>
        <tr>
             <th>Horarios</th>
              <td> {card.horario}</td>
            </tr>
        <tr>
          <th>WI-FI</th>
          <td>{card.wifi} </td>
        </tr>

        <tr>
          <th>Formas de pago </th>
          <td>{card.formadepago} </td>
        </tr>  

        <tr>
          <th>Zona de niños</th>
          <td>{card.zonaninos} </td>
        </tr>

        <tr>
          <th>Reservas</th>
          <td>{card.reserva}</td>
        </tr>

  </table>

      </div>)}

      {card.tipo == 'evento' &&(

      <div className='div-tabla'> 
      <table className='tabla-items'>

        <tr>
        <th>Telefono</th>
        <td>{card.Telefono}</td>
      </tr>
      <tr>
        <th>Horarios</th>
          <td> {card.horario}</td>
        </tr>
       
        <tr>
      <th>Direccion del evento</th>
      <td>{card.direccion} </td>
      </tr>


      <tr>
      <th>Zona de niños</th>
      <td>{card.zonaninos} </td>
      </tr>

      <tr>
      <th>Ingreso</th>
      <td>{card.ingreso} </td>
      </tr>

      <tr>
      <th>Dia del evento</th>
      <td>{card.diaevento} </td>
      </tr>

      </table>

      </div>)}

    
      {card.tipo == 'hospedaje' &&(

        <div className='div-tabla'> 
        <table className='tabla-items'>

          <tr>
          <th>Telefono</th>
          <td>{card.Telefono}</td>
        </tr>
        <tr>
          <th>Horarios</th>
            <td> {card.horario}</td>
          </tr>
        <tr>
        <th>WI-FI</th>
        <td>{card.wifi} </td>
        </tr>

        <tr>
        <th>Formas de pago </th>
        <td>{card.formadepago} </td>
        </tr>  

        <tr>
        <th>Precio por dia</th>
        <td>{card.preciodia} </td>
        </tr>

        <tr>
        <th>Minimo alquiler</th>
        <td>{card.minalquiler}</td>
        </tr>

        <tr>
        <th>Bufet</th>
        <td>{card.bufet}</td>
        </tr>

        </table>

        </div>)}



      

    <br></br>

    
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
