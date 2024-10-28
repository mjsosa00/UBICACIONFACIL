import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa el CSS

function Navbar() {
  const [clicked, setClicked] = useState(false);

  // Nueva función para alternar el estado del menú
  const handleToggleClick = () => {
    setClicked(!clicked);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setClicked(false);
  };

  return (
<<<<<<< Updated upstream
    <NavContainer>
              <Link to="/" onClick={handleLinkClick}>
      <h6 className='text-uppercase fw-bold mb- ms-3 mt-1' style={{ color: '#6C757D'}}>
      <img 
        src="https://i.ibb.co/WDPTxmv/UBIFACIL-blanco-10px.png" 
        alt="Logo"
        style={{ width: '50px', height: 'auto', marginRight: '8px', marginTop: '2px' }} 
      />
    </h6>
    </Link>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Inicio</Link>
        <Link to="/Gastronomia" onClick={handleLinkClick}>Gastronomia</Link>
        <Link to="/Eventos" onClick={handleLinkClick}>Eventos</Link>
        <Link to="/SobreNosotros" onClick={handleLinkClick}>Sobre Nosotros</Link>
        <Link to="/Contacto" onClick={handleLinkClick}>Contacto</Link>
=======
    <NavContainer scrolling={scrolling}>
      <Link to="/" onClick={handleLinkClick}>
        <h6 className='text-uppercase fw-bold mb- ms-3 mt-1' style={{ color: '#6C757D' }}>
          <img
            src="https://i.ibb.co/WDPTxmv/UBIFACIL-blanco-10px.png"
            alt="Logo"
            style={{ width: '50px', height: 'auto', marginRight: '8px', marginTop: '2px' }}
          />
        </h6>
      </Link>
      <div className={`links ${clicked ? 'active' : ''}`} style={{ textTransform: 'uppercase'}}>
        {['/', '/Gastronomia', '/Eventos', '/Hospedaje', '/Contacto'].map((path) => (
          <Link
            to={path}
            onClick={handleLinkClick}
            className={location.pathname === path ? 'activer' : ''}
            key={path}
          >
            {path === '/' ? 'Inicio' : path.substring(1)}
          </Link>
        ))}
>>>>>>> Stashed changes
      </div>
      <div className='burguer'>
        {/* Usa handleToggleClick aquí para abrir y cerrar el menú */}
        <BurguerButton clicked={clicked} handleClick={handleToggleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavContainer>
  );
}

export default Navbar;


const NavContainer = styled.nav`

  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #003B95;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 30;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-image: linear-gradient(#213341 20%, #049CB3);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 20;
  transition: all .6s ease ;

  
  &.active{
    border-radius: 0 0 70% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#213341 20%, #049CB3);
    
  }
    .react-multiple-carousel__arrow {
    position: absolute;
    outline: 0;
    transition: all .5s;
    border-radius: 35px;
    z-index: 0;
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    cursor: pointer;
}
`