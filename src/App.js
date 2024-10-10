// src/services/App.js
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Seccion from './components/Seccion';
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import Contacto from './components/contacto';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TerminosYServicios from './components/TerminosYServicios';
import PoliticaDePrivacidad from './components/PoliticaDePrivacidad';
import FacilubCarrusel from './components/FacilubCarrusel';
import Navbar from './components/Navbar';
import Card from './components/Card';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentReactivo from './components/ComponentReactivo';
import { CgPacman } from 'react-icons/cg';
import ClickableComponent from './components/Clickable';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main className="main-content">
          <Main />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
         <div>
        <FacilubCarrusel />

        <div style={{ padding: '20px' }}>
        <ClickableComponent
          title="Gastronomia"
          subtitle="Lugares, sabores y placeres"
          route="/Gastronomia"
        />
        <ClickableComponent
          title="Eventos"
          subtitle="Festivales, conciertos y festejos"
          route="/Eventos"
        />
         <ClickableComponent
          title="Hospedaje"
          subtitle="Hoteles, hosterias y campings"
          route="/Hospedaje"
        />
      </div>
      <Routes>
        <Route path="/Eventos" element={<h1>Eventos</h1>} />
        <Route path="/Gastronomia" element={<h1>Gastronomia</h1>} />
        <Route path="/Hospedaje" element={<h1>Hospedaje</h1>} />
      </Routes>
        
    </div>

      )}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Gastronomia" element={<Card />} />
        <Route path="/Eventos" element={<Card />} />
        <Route path="/Hospedaje" element={<Card />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/TerminosYServicios" element={<TerminosYServicios />} />
        <Route path="/PoliticaDePrivacidad" element={<PoliticaDePrivacidad />} />
        <Route path="/ComponenteReactivo" element={<ComponentReactivo />} />
      </Routes> 
    </>
  );
}

export default App;
