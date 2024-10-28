import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LuGalleryThumbnails } from 'react-icons/lu';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ComponenteReactivo.css';







const ComponentReactivo=() =>{

 
    const location = useLocation();
    const { card } = location.state || {};

    const images = card.imagenes.map((img) => ({
        original: img,
        thumbnail: img,
    }));

    return(

<<<<<<< Updated upstream
      
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
            <br></br>
            <div id='contenedor-titulo'>
            <h1 id='titulo-articulo'>{card.titulo} </h1>
            </div>
             <br></br>

           <div id='contenedor-items'>
             <div id='div-telefono'>
                <h2 id='texto-telefono'>Telefono</h2>
                <h2 id='telefono'>{card.Telefono}</h2>
             </div>

             <div id='div-horario'>
                <h2 id='texto-horario'>Horarios</h2>
                <h2 id='Horario'>{card.horario}</h2>
             </div>
             </div>
             <br></br>
            <div id='contenedor-parrafo1'>
                <p id='parrafo-articulo1' >{card.texto} </p>

            </div>


          
            <br></br>
              <div id='contenedor-parrafo2'>
              <p id='parrafo-articulo2' ></p>


              </div>
            <div id='contenedor-como-llegar'>
            <br></br>
              <h2>Como llegar?</h2>
              <br></br>
              <iframe id='mapa' src={card.href}></iframe>
              </div>
          <br></br>
          <br></br>
        </div>
        
    );


=======
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
>>>>>>> Stashed changes
};


export default ComponentReactivo;