import React from 'react';
import './App.css';
import FacilubHeader from './components/FacilubHeader';
import FacilubFooter from './components/FacilubFooter';
import Carrusel from './components/FacilubCarrusel';

function App() {
  return (
    <div className="App">
      <FacilubHeader />
      <main>
      
      <Carrusel /> 
       
      </main>
      <FacilubFooter />
    </div>
    
  );
}

export default App;