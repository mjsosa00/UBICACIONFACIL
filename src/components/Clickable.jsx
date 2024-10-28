import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 400px;
  width: 1000px;
  display: flex;
  flex-direction: column;
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

<<<<<<< Updated upstream
const ContenedorTexto = styled.div`
  background-color: rgba(255, 255, 255, 0.7); /* Fondo translúcido */
  padding: 20px; /* Espacio alrededor del texto */
  border-radius: 10px; /* Bordes redondeados */
  position: absolute; /* Posiciona el contenedor absolutamente */
  left: 0; /* Se alinea al lado izquierdo */
  right: 0; /* Se alinea al lado derecho */
  bottom: 20px; /* Ajusta la posición vertical según sea necesario */
  z-index: 10; /* Asegura que esté por encima de la imagen */
  text-align: center; /* Alinear el texto al centro */
=======
// Contenedor de texto
const TextContainer = styled.div`
  flex: 1;
  width: 500px;
  height: 378px;
  margin-left: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  bottom: 20px;
  @media (max-width: 768px) {
    width: 100%; /* Texto ocupa todo el ancho en móviles */
    margin-left: 0; /* Quitamos el margen izquierdo en móviles */
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  color: #003B95;
  font-weight: bold;
  font-size: 24px;
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
const ClickableComponent = ({ title, subtitle, route, imagen }) => {
=======
const Button = styled.button`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #003B95;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #E6E4DC;
    color: #003B95;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem; /* Aumentamos el padding en móviles */
    font-size: 1rem; /* Ajustamos el tamaño de la fuente del botón */
  }
`;

const ClickableComponent = ({
  title,
  subtitle,
  route,
  imagen,
  description,
  highlightText,
  invert,
  buttonText,
  initial,
  animate,
  transition
}) => {
>>>>>>> Stashed changes
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div>
      <Container onClick={handleClick}>
        <Image id='imagenfondo' src={imagen} alt="Fondo" />
        
        <ContenedorTexto>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </ContenedorTexto>
      </Container>
    </div>
  );
};

export default ClickableComponent;
