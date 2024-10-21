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
import ClickableComponent from './components/Clickable'; // Asegúrate de que esta línea esté aquí
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentReactivo from './components/ComponentReactivo';
import SearchComponent from './components/SearchComponent';
import { DecoracionSVG, CirculoIzquierdaSVG, CirculoDerechaSVG, PuntitosSVG } from './components/DecoracionSVG';
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
            <div className='Componente1'>
              <ClickableComponent
                className="componenteGastronomia"
                title="Gastronomía"
                subtitle="Lugares, sabores y placeres"
                imagen="https://www.aseguratuviaje.com.ve/images/mejores-platos-gastronomia-argentina.jpg"
                route="/Gastronomia"
                description="La gastronomía argentina es famosa por su diversidad de sabores y tradiciones. Desde la famosa parrilla hasta los deliciosos dulces como el alfajor, cada bocado cuenta una historia."
                highlightText=""
                invert={true} // Esto invierte el orden, mostrando el texto primero
                buttonText="Descubre nuestras comidas" // Texto personalizado para el botón
                initial={{ opacity: 0, y: 50 }} // Animación
                animate={{ opacity: 1, y: 0 }}   // Animación 
                transition={{ duration: 0.5 }}    // Duración

              />

              <DecoracionSVG
                width="200px"
                height="200px"
                top="1400px"
                left="0px"
              />

              <CirculoIzquierdaSVG
                width="200px"
                height="200px"
                top="1800px"
                left="0px"
                transform='translate(-50%, 0)'
              />

            </div>



            <PuntitosSVG
              width="100px"
              height="400px"
              top="1450px"
              right="50px"
              transform='translate(-500%, 0)'
            />

            <CirculoDerechaSVG
              width="100px"
              height="400px"
              top="1000px"
              right="0px"
            />

           


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
              initial={{ opacity: 0, x: -50 }} // Animación diferente
              animate={{ opacity: 1, x: 0 }}    // Animación diferente
              transition={{ duration: 0.8 }}     // Duración diferente

            />
            <ClickableComponent
              title="Hospedaje"
              subtitle="Hoteles, hosterías y campings"
              imagen="https://images.adsttc.com/media/images/66f5/7167/4003/183c/2a97/5bd2/slideshow/un-hospedaje-en-el-pigue-mestizo-estudio-arquitectura_15.jpg?1727361417"
              route="/Hospedaje"
            />




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
        <Route path="/ComponenteReactivo" element={<ComponentReactivo />} />
      </Routes>
    </>
  );
}

export default App;


