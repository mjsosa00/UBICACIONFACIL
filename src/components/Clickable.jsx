import React from 'react';
import styled from 'styled-components';
import { useNavigate  } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #f0f8ff;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #007bff;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1em;
  color: #555;
  margin: 5px 0 0 0;
`;

const ClickableComponent = ({ title, subtitle, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(route);
    };

  return (
    <Container onClick={handleClick}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default ClickableComponent;
