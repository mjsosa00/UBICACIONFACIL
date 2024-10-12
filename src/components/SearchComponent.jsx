import React, { useState, useRef, useEffect, useCallback  } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate  } from 'react-router-dom';

const SearchContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const SearchIcon = styled.div`
  font-size: 40px;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const SearchInput = styled.input`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  font-size: 18px;
  z-index: 1001;
`;

const SearchComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [termino, setTermino] = useState('');

  const handleIconClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleOverlayClick = () => {
       setIsOpen(!isOpen);
  };

  const navigate  = useNavigate();

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter') {
         // setTermino(event.target.value);
          navigate('/Resultado', { state: { termino } });
        }
    },[navigate, termino]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

  return (
    <>
      {isOpen && <Overlay onClick={handleOverlayClick} />}
      {isOpen && (
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="Buscar..."
          onBlur={() => setIsOpen(false)}
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
        />
      )}
      <SearchContainer>
        <SearchIcon onClick={handleIconClick}>
          <FaSearch />
        </SearchIcon>
      </SearchContainer>
    </>
  );
};

export default SearchComponent;
