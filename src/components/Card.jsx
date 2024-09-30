import React, { useState } from 'react';
import CardComponent from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const images = [
  {
    normal: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzvVdMKNj93NQGwdBcyGFzLhIXNhmFC78q-V4mBwHrTVM4zV1U_1HHhWodW5CpCyoO8JUg4qt9ZTj6b8nUJGGFKKGG2Ny2Y8jsVMpfzP_pi1lLWFmkjKAcLAnJ4WPGnO4UlnGQmV3w8Z1_/s400/paisajes+naturales+fotos+nuevas+(1).jpg',
    hover: 'https://th.bing.com/th/id/OIP.Va2ypIC8xbl7pm2Mkihr4gHaEK?rs=1&pid=ImgDetMain' // Cambia esta URL por la imagen de hover deseada
  },
  {
    normal: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ0MKBhyphenhyphenaSrLpS44dMmsokzlG_ildz3wN-PShSXWSaOQi0q3Xxi0mlpUel4GKgKwg7m-Rlit1ndTOp3BT5TQcPDL7H6SuFok6B8l5e4Benb2dxBTP8ja7kBIUPZ6cyw2RbONOXnH1x6GAK/s400/paisajes+naturales+fotos+nuevas+(2).jpg',
    hover: 'https://example.com/image-hover2.jpg' // Cambia esta URL por la imagen de hover deseada
  },
  {
    normal: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5sU13wqiT_FxT9wmNP77KL2g2N4hKhzr1yavfwSAfJicL1_32TA1By1WDtavRzITAn9P5YG_cu6M0jZON7diedPRlnhyphenhyphenGMc38Thv8HI4ntMI8vsS7KEVPPBr-VJLLsDWCrJY3fjjTBdXX/s400/paisajes+naturales+fotos+nuevas+(5).jpg',
    hover: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabecera-completa/selva-irati-otono-navarra-s1698710608.jpg' // Cambia esta URL por la imagen de hover deseada
  },
  {
    normal: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQkAfd5ED3ryh6So2cdo0nXvr37g47tXnpdd9QGfEJvFIgvNkZ_ekWjxCgqweqDu3LZIRoPUvzGhWWVtiGVkNR7RBbsMWx6-0HMk4DUDTKt_82kyseNbYgJpH5BJ4XXKifiFRdRIw6RTMF/s400/paisajes+naturales+fotos+nuevas+(6).jpg',
    hover: 'https://th.bing.com/th/id/OIP.2evhrBZfCk1U-Z-ZTKIi6QAAAA?rs=1&pid=ImgDetMain' // Cambia esta URL por la imagen de hover deseada
  }
];

function GridExample() {
  const [backgroundImage, setBackgroundImage] = useState('');

  return (
    <div 
      style={{ 
        textAlign: 'center', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        minHeight: '100vh', // Ajusta la altura según lo necesario
        transition: 'background-image 0.3s ease'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 'bold' }}>
        Imágenes
      </h1>
      <Row xs={1} md={2} className="g-4">
        {images.map((img, idx) => (
          <Col key={idx}>
            <CardComponent
              style={{ 
                width: '500px', 
                margin: '0 auto', 
                background: '#213341',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Efecto de sombra
                transition: 'transform 0.3s ease, box-shadow 0.3s ease' // Suaviza la transformación y sombra
              }}
              onMouseEnter={() => {
                setBackgroundImage(img.hover);
                document.body.style.cursor = 'pointer'; // Cambia el cursor si lo deseas
              }}
              onMouseLeave={() => {
                setBackgroundImage('');
                document.body.style.cursor = 'default';
              }}
            >
              <CardComponent.Img 
                variant="top" 
                src={img.normal} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <CardComponent.Body>
                <CardComponent.Title style={{ color: 'gray' }}>Card title {idx + 1}</CardComponent.Title>
                <CardComponent.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardComponent.Text>
              </CardComponent.Body>
            </CardComponent>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
