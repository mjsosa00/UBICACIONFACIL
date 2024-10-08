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
             <h2 id='telefono'>{card.Telefono}</h2>
             <br></br>
            <div id='contenedor-parrafo1'>
                <p id='parrafo-articulo1' >{card.texto} </p>

            </div>


          
            <br></br>
              <div id='contenedor-parrafo2'>
              <p id='parrafo-articulo2' ></p>


              </div>

            <br></br>
              <h2>Como llegar?</h2>
              <br></br>
              <iframe id='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.6764523115632!2d-66.05998795115431!3d-33.12454917478796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d46d46fee74591%3A0x4f5253d53566049e!2sLo%20de%20Maria%20Jos%C3%A9!5e0!3m2!1ses!2sar!4v1728303950882!5m2!1ses!2sar"></iframe>

          <br></br>
          <br></br>
        </div>
        
    );


};


export default ComponentReactivo;