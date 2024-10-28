import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import './Navbar.css';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const handleToggleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = () => {
    setClicked(false);
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
      </div>
      <div className='burguer'>
        <BurguerButton clicked={clicked} handleClick={handleToggleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  position: fixed; /* Fija el navbar en la parte superior */
  top: 0;
  left: 0;
  right: 0;
  padding: .4rem;
  background-color: #003B95;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: ${({ scrolling }) => (scrolling ? '0.8' : '1')};

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    position: relative;
    transition: color 0.3s;
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;

    a {
      color: white;
      font-family: "Blender Pro", sans-serif; 
      font-weight: 700;
      display: block;
      text-decoration: none;
      transition: color 0.3s;
    }

    a::after {
      content: ""; 
      position: absolute; 
      height: 2px;
      width: 100%; 
      bottom: -0.5rem; 
      left: 0; 
      background: white;
      opacity: 0;
      transition: opacity 0.3s, background 0.3s;
    }

    a:hover::after {
      opacity: 1;
      background: #ffb204;
    }

    a:hover {
      color: #ffb204;
    }

    a.activer {
      color: #ffb204;
    }

    a.activer::after {
      opacity: 1;
      background: #ffb204;
    }
      

    @media (max-width: 767px) {
      a {
        color: white;
      }

      a:hover::after,
      a:hover,
      a.activer::after,
      a.activer {
        background: transparent;
        color: white;
      }

      a::after {
        opacity: 0;
      }
    }

    

    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      display: block;

      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 150px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 30;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-image: linear-gradient(#213341 20%, #049CB3);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 20;
  transition: all .6s ease;

  &.active {
  position: fixed;
    border-radius: 0 0 70% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #003B95;
    z-index: 2;
  }
`;
