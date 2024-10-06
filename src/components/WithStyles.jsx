// src/components/WithStyles.jsx
import React from 'react';
import styled from 'styled-components';
import './Carousel.css';

const StyledContainer = styled.div`
  text-align: center;
`;

const WithStyles = ({ description, headline, image }) => {
  return (
    <StyledContainer>
      <img src={image} alt={headline} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{headline}</h3>
      <p>{description}</p>
    </StyledContainer>
  );
};

export default WithStyles;
