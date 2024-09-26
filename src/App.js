import React from 'react';
import './App.css';
import FacilubHeader from './components/FacilubHeader';
import FacilubFooter from './components/FacilubFooter';
import Carrusel from './components/FacilubCarrusel';

function App() {
  return (
    <div> {/* Cambiado a "container" */}
      <FacilubHeader />
      <Carrusel />
      <FacilubFooter />
    </div>
  );
}

export default App;
