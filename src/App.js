// src/services/App.js
import React from 'react';
import './App.css';
import FacilubHeader from './components/FacilubHeader';
import FacilubFooter from './components/FacilubFooter';
import FacilubCarrusel from './components/FacilubCarrusel';
import Seccion from './components/Seccion';
import Inicio from './components/Inicio'; // Asegúrate de que este archivo exista
import SobreNosotros from './components/SobreNosotros'; // Asegúrate de que este archivo exista
import Contacto from './components/Contacto'; // Asegúrate de que este archivo exista
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <div>
      <FacilubHeader />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Mostrar el carrusel solo en la página de inicio */}
      {location.pathname === '/' && <FacilubCarrusel />}


        <Seccion />
     

      <FacilubFooter />
    </div>
  );
}

export default App;

