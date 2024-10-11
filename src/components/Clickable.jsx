import React from 'react';
import styled from 'styled-components';
import { useNavigate  } from 'react-router-dom';


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

const Title = styled.h1`
  padding: 10px 0;  /* Para dar espacio vertical sin usar transform */
  font-size: 1.5em;
  color: #007bff;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);  /* Fondo translúcido */
  text-align: center;
  z-index: 10;
  margin-top: 20px;  /* Añadir un margen superior */
`;

const Subtitle = styled.h2`
  font-size: 1em;
  color: #555;
  z-index: 10;
  text-align: center;
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
    <div style={{ marginTop: '300px' }}>
    <Container onClick={handleClick}>
      <Image id='imagenfondo' src={imagen} alt="Fondo" />
      
        
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      
      
    </Container>
    </div>
  );
};

export default ClickableComponent;
