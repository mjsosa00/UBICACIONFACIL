import React, { useState } from 'react';
import CardComponent from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Card.css';
import cardsData from '../cardsData.json';



function GridExample() {
  const [backgroundImage, setBackgroundImage] = useState('');

  return (
    <div 
    className='Container-divino'
      style={{ 
        textAlign: 'center', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        minHeight: '100vh', // Ajusta la altura según lo necesario
        transition: 'background-image 0.3s ease'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 'bold' }}>
        
      </h1>
      <Row xs={1} md={2} className="g-4">
        {cardsData.map((card) => (
          <Col key={card.id}  >
            <CardComponent
              id='componentecard'
            
              onMouseEnter={() => {
                setBackgroundImage(card.hover);
                document.body.style.cursor = 'pointer'; // Cambia el cursor si lo deseas
              }}
              onMouseLeave={() => {
                setBackgroundImage('');
                document.body.style.cursor = 'default';
              }}
            >
              <CardComponent.Img 
              className='CardComponent-imagenes'
                variant="top" 
                src={card.normal} 
                
                
              />
              <CardComponent.Body className='component-body'>
                <CardComponent.Title id='card-titulo' >{card.titulo} </CardComponent.Title>
                <CardComponent.Text>
                  {card.descripcion}
                  
                </CardComponent.Text>
                <button id='botonVerMas'>ver más</button>
              </CardComponent.Body>
              
            </CardComponent>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
