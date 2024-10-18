import React, { useState, useEffect } from 'react';
import './FacilubCarrusel.css'; // Importa el CSS externo
import fetchData from '../services/referencias'; // Asegúrate de que la ruta sea correcta
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ClickableComponent from './Clickable';

const FacilubCarrusel = () => {
  const [items, setItems] = useState([]);

  // Cargar los datos desde el JSON
  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchData();
      const formattedData = data.map(item => ({
        name: item.titulo,
        img: item.imagen,
        texto: item.texto,
        href: item.href
      }));
      setItems(formattedData);
    };

    loadItems();
  }, []);

  // Función para pasar al siguiente elemento
  const nextItem = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.push(newItems.shift()); // Mover el primer item al final
      return newItems;
    });
  };

  // Función para volver al elemento anterior
  const prevItem = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.unshift(newItems.pop()); // Mover el último item al principio
      return newItems;
    });
  };

  return (
    <div className="container custom-carousel" style={{maxWidth: "1910px"}}>
      <div className="slide">
        {items.map((item, index) => (
          <div key={index} className="item" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.texto}</div>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button>Ver mas</button>
              </a>
            </div>
          </div>
        ))}
      </div>
     
      <div className="button">
        <button className="prev" onClick={prevItem}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={nextItem}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      
        
          <Routes>
                <Route path="/Eventos" element={<h1>Eventos</h1>} />
                <Route path="/Gastronomia" element={<h1>Gastronomia</h1>} />
          </Routes>
      
    </div>
  );
};
 
export default FacilubCarrusel;