import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 0px;
  border-radius: 10px;
  transition: background-color 0.3s;
  border: solid 4px white;
  position: relative; /* Necesario para mantener la imagen de fondo */
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 15px;
    width: 100%; /* Para hacerla responsiva */
  }


`;

const Contenedortarjetas = styled.div`

width: 500px;
height: 400px;
display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 0px 0px; 


`;
const ContenedorTexto = styled.div`
  background-color: rgba(255, 255, 255, 0.7); /* Fondo translúcido */
  padding: 20px; /* Espacio alrededor del texto */
  border-radius: 10px; /* Bordes redondeados */
  position: absolute; /* Posiciona el contenedor absolutamente */
  left: 0; /* Se alinea al lado izquierdo */
  right: 0; /* Se alinea al lado derecho */
  bottom: 20px; /* Ajusta la posición vertical según sea necesario */
  z-index: 1; /* Asegura que esté por encima de la imagen */
  text-align: center; /* Alinear el texto al centro */
`;

const Title = styled.h1`
  padding: 10px 0;  /* Para dar espacio vertical sin usar transform */
  font-size: 1.5em;
  color: #007bff;
  margin: 0; /* Elimina el margen por defecto del h1 */
`;

const Subtitle = styled.h2`
  font-size: 1em;
  color: #555;
  margin-top: 10px;  /* Espacio entre el título y el subtítulo */
`;

const Image = styled.img`
  position: absolute;  /* Fijar la imagen de fondo */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantener relación de aspecto */
  z-index: -1; /* Colocar la imagen detrás del contenido */
`;

const ClickableComponent = ({ title, subtitle, route, imagen }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <Contenedortarjetas>
      <Container onClick={handleClick}>
        <Image id='imagenfondo' src={imagen} alt="Fondo" />
        
        <ContenedorTexto>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </ContenedorTexto>
      </Container>
    </Contenedortarjetas>
  );
};

export default ClickableComponent;
