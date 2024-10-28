import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarruselHospedaje.css';

const CarruselHospedaje = () => {
  const [hospedajes, setHospedajes] = useState([]); // Estado para almacenar la lista de hospedajes
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/hospedaje.json'); // Cambia la URL según tu archivo
        const data = await response.json();
        setHospedajes(data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchData();
  }, []);

  const customTextMap = {
    1: {
      titulo: "Hospedaje A - Modificado",
      texto: "Este es un texto modificado para Hospedaje A.",
      botonTexto: "Visitar Hospedaje A",
    },
    2: {
      titulo: "Hospedaje B - Modificado",
      texto: "¡No te pierdas el Hospedaje B! Es genial.",
      botonTexto: "Descubre el Hospedaje B",
    },
    3: {
      titulo: "Hospedaje C - Modificado",
      texto: "El Hospedaje C es la mejor opción para ti.",
      botonTexto: "Visitar Hospedaje C",
    },
    // Agrega más mapeos según sea necesario
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  if (loading) {
    return <div>Cargando...</div>; // Mensaje de carga
  }

  return (
    <div style={{ width: "100%", padding: "20px 0", display: "flex", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ width: "100%", maxWidth: "1400px" }}>
        <Slider {...settings}>
          {hospedajes.map((hospedaje) => {
            const customText = customTextMap[hospedaje.id]; // Obtiene el texto modificado si existe
            return (
              <div key={hospedaje.id} style={{ padding: "10px" }}>
                <div style={{
                  borderRadius: "10px",
                  border: 'solid 2px gray',
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  width: "100%",
                  maxWidth: "300px",
                  minHeight: "300px", // Altura fija para el contenedor
                  margin: "0 auto",
                }}>
                  <img
                    src={hospedaje.imagenes[0]} // Asegúrate de que el campo 'imagenes' esté presente en tu JSON
                    alt={hospedaje.titulo}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "15px", height: "170px" }}> {/* Establece altura fija para mantener consistencia */}
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333", height: "30px", margin: "0" }}>
                      {customText ? customText.titulo : hospedaje.titulo}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0", height: "40px", overflow: "hidden" }}>
                      {customText ? customText.texto : hospedaje.texto}
                    </p>
                    <Link
                      to={`/componentereactivo/${hospedaje.titulo}`} // Asumiendo que el título es único
                      style={{
                        display: "inline-block",
                        margin: "10px 0",
                        padding: "8px 12px",
                        backgroundColor: "#003B95",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "5px",
                      }}
                    >
                      {customText ? customText.botonTexto : "Visitar página"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CarruselHospedaje;
