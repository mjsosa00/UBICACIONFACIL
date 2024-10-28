import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Contenedor principal estilizado
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: transparent;
  border-radius: 40px;
  width: 100%;
  height: auto; /* Ajustamos el alto para que sea dinámico */
  max-width: 1400px;
  margin: 20px auto;
  z-index: 1;
`;

// Contenedor interno que agrupa la imagen y el texto, con opción de invertir el orden
const Content = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  max-width: 1400px;
  align-items: center;
  flex-direction: ${({ invert }) => (invert ? 'row-reverse' : 'row')};  
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin: 0px 80px;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column; /* Apilar en pantallas pequeñas */
    padding-top: 2rem; /* Reducimos el padding en dispositivos móviles */
    padding-bottom: 2rem;
    margin: 0px 20px; /* Reducimos el margen en móviles */
  }
`;

// Contenedor para la imagen
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 550px;
  height: 400px;
  border-radius: 25px;

  @media (max-width: 768px) {
    width: 302px; /* Imagen ocupa todo el ancho en móviles */
    height: 200px; /* Mantiene la proporción en móviles */
  }
`;

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
  color: #003B95;;
  font-weight: bold;
  font-size: 24px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-size: 50px;
  font-weight: 700;
  margin: 12px 0 0;

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajustamos tamaño de la fuente en móviles */
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center; /* Centramos el texto en móviles */
    font-size: 0.9rem; /* Ajustamos tamaño de fuente en móviles */
  }
`;

const Highlight = styled.span`
  font-size: 2.5rem;
  display: inline-block;
  transform: skewX(-12deg);
  background-color: #003B95;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajustamos el tamaño del span en móviles */
  }
`;

const Button = styled.button`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #003B95;;
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
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    navigate(route); // El enrutamiento ahora se activa al hacer clic en el botón
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Deja de observar una vez que se ha mostrado
        }
      },
      { threshold: 0.1 } // Se activa cuando el 10% del componente es visible
    );

    if (ref.current) {
      observer.observe(ref.current); // Comienza a observar el componente
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Limpia el observer al desmontar
      }
    };
  }, []);

  return (
    <Container ref={ref}>
      <Content 
        invert={invert} 
        initial={initial} 
        animate={isVisible ? animate : initial}  // Cambia la animación basada en la visibilidad
        transition={transition}
      >
        <ImageContainer>
          <Image src={imagen} alt="Imagen de la promo" />
        </ImageContainer>
        <TextContainer>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
          <Description>
            {description} <Highlight>{highlightText}</Highlight>
          </Description>
          <Button onClick={handleClick}>{buttonText || "Info"}</Button>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default ClickableComponent;
