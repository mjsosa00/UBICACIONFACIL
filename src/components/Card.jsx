import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardComponent from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Card.css';
import getData from '../services/dataService'

function GridExample() {
//  const [backgroundImage, setBackgroundImage] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;

  const [isGastronomia, setIsGastronomia] = useState(currentPath === '/Gastronomia');
  const [isEventos, setIsEventos] = useState(currentPath === '/Eventos');
  const [items, setItems] = useState([]);

  // Este useEffect se ejecutará cuando cambie la ubicación
  useEffect(() => {
    setIsGastronomia(currentPath === '/Gastronomia');
    setIsEventos(currentPath === '/Eventos');
  }, [currentPath]);

  // Cargar los datos desde el JSON
  useEffect(() => {
    const loadItems = async () => {
      const data = await getData(isGastronomia, isEventos);
      const formattedData = data.map(item => ({
        "titulo": item.titulo,
        "texto": item.texto,
        "imagen": item.imagen,
        "Pagina": item.Pagina,
        "Telefono": item.Telefono,
        "id":item.id
      }));
      setItems(formattedData);
    };

    loadItems();
  }, [isGastronomia, isEventos]);

  return (
    <div 
    className='Container-divino'
      style={{ 
        textAlign: 'center', 
        //   backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        // minHeight: '100vh', // Ajusta la altura según lo necesario
        transition: 'background-image 0.3s ease'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 'bold' }}>
      {isEventos ? 'EVENTOS' : 'GASTRONOMÍA'}
      </h1>
      <Row xs={1} md={2} className="g-4">
        {items.map((card) => (
          <Col key={card.id}  >
            <CardComponent id='componentecard'>
              <CardComponent.Img className='CardComponent-imagenes' variant="top" src={card.imagen} />
              <CardComponent.Body className='component-body'>
                <CardComponent.Title id='card-titulo' >{card.titulo} </CardComponent.Title>
                <CardComponent.Text className='CardComponent-texto'>{card.texto}</CardComponent.Text>
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


            
              // onMouseEnter={() => {
              //   setBackgroundImage(card.hover);
              //   document.body.style.cursor = 'pointer'; // Cambia el cursor si lo deseas
              // }}
              // onMouseLeave={() => {
              //   setBackgroundImage('');
              //   document.body.style.cursor = 'default';
              // }}
            
