import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LuGalleryThumbnails } from 'react-icons/lu';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ComponenteReactivo.css';







const ComponentReactivo=() =>{

  const location = useLocation();
  const { card } = location.state;
  const images = [
    {
      original:card.imagen,
      thumbnail:card.imagen,
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/1000/600/",
    },
  ];

    return(

      
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
            <h1 id='titulo-articulo'>{card.titulo} </h1>
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


};


export default ComponentReactivo;