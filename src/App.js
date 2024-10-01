// src/services/App.js
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Seccion from './components/Seccion';
import Inicio from './components/Inicio'; // Asegúrate de que este archivo exista
import SobreNosotros from './components/SobreNosotros'; // Asegúrate de que este archivo exista
import Contacto from './components/contacto'; // Asegúrate de que este archivo exista
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TerminosYServicios from './components/TerminosYServicios';
import PoliticaDePrivacidad from './components/PoliticaDePrivacidad';
import Navbar from './components/Navbar';
import Card from './components/Card';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <>
      
     
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Inicio />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/TerminosYServicios" element={<TerminosYServicios/>} />
        <Route path="/PoliticaDePrivacidad" element={<PoliticaDePrivacidad/>} />
      </Routes>

      {/* Mostrar el carrusel solo en la página de inicio */}
      {location.pathname === '/' && <Carousel />}
      {location.pathname=== '/' && <Seccion/>}
      {location.pathname=== '/' && <Card/>}
      

      <Footer />
      
    </>
  );
}

export default App;

