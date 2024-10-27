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
import ClickableComponent from './components/Clickable';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentReactivo from './components/ComponentReactivo';
import SearchComponent from './components/SearchComponent';
import CarruselHospedaje from './components/CarruselHospedaje';
import { DecoracionSVG, CirculoIzquierdaSVG, CirculoDerechaSVG, PuntitosSVG } from './components/DecoracionSVG';
import CarruselSelector from './components/CarruselSelector';
import CarruselGastronomia from './components/CarruselGastronomia';



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
          <SearchComponent />
          <FacilubCarrusel />
          <section id='sectionprincipal'>
              <ClickableComponent
                className="componenteGastronomia"
                title="Gastronomía"
                subtitle="Lugares, sabores y placeres"
                imagen="https://www.aseguratuviaje.com.ve/images/mejores-platos-gastronomia-argentina.jpg"
                route="/Gastronomia"
                description="La gastronomía argentina es famosa por su diversidad de sabores y tradiciones. Desde la famosa parrilla hasta los deliciosos dulces como el alfajor, cada bocado cuenta una historia."
                highlightText=""
                invert={true}
                buttonText="Descubre nuestras comidas"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            <CarruselGastronomia />



            <ClickableComponent
              title="Eventos"
              subtitle="Festivales, conciertos y festejos"
              imagen="https://i.ibb.co/LCfLTqD/pexels-mikky-k-158844-625644.jpg"
              route="/Eventos"
              description={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                <br />,
                <br />,
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ]}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <ClickableComponent
              title="Hospedaje"
              subtitle="Hoteles, hosterías y campings"
              imagen="https://images.adsttc.com/media/images/66f5/7167/4003/183c/2a97/5bd2/slideshow/un-hospedaje-en-el-pigue-mestizo-estudio-arquitectura_15.jpg?1727361417"
              route="/Hospedaje"
            />

            <h1>HOSPEDAJE</h1>
            <CarruselHospedaje />

            <Routes>
              <Route path="/Eventos" element={<h1>Eventos</h1>} />
              <Route path="/Gastronomia" element={<h1>Gastronomía</h1>} />
              <Route path="/Hospedaje" element={<h1>Hospedaje</h1>} />
              <Route path="/Resultado" element={<h1>Resultado</h1>} />
            </Routes>
          </section>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Gastronomia" element={<Card />} />
        <Route path="/Eventos" element={<Card />} />
        <Route path="/Hospedaje" element={<Card />} />
        <Route path="/Resultado" element={<Card />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/TerminosYServicios" element={<TerminosYServicios />} />
        <Route path="/PoliticaDePrivacidad" element={<PoliticaDePrivacidad />} />
        <Route path="/ComponenteReactivo/:titulo" element={<ComponentReactivo />} />

        {/* Nueva ruta con parámetros :seccion y :titulo */}
        <Route path="/:tipo/:titulo" element={<ComponentReactivo />} />
      </Routes>
    </>
  );
}

export default App;
