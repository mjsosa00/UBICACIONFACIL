import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardComponent from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Card.css';
import getData from '../services/dataService';

function GridExample() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const currentPath = location.pathname;
    const { termino } = location.state || {};

    const [isGastronomia, setIsGastronomia] = useState(currentPath === '/Gastronomia');
    const [isEventos, setIsEventos] = useState(currentPath === '/Eventos');
    const [isHospedaje, setIsHospedaje] = useState(currentPath === '/Hospedaje');
    const [isBusqueda, setIsBusqueda] = useState(currentPath === '/Resultado');
    const [items, setItems] = useState([]);

    useEffect(() => {
        setIsGastronomia(currentPath === '/Gastronomia');
        setIsEventos(currentPath === '/Eventos');
        setIsHospedaje(currentPath === '/Hospedaje');
    }, [currentPath]);

    useEffect(() => {
        const loadItems = async () => {
            const data = await getData(isGastronomia, isEventos, isHospedaje, isBusqueda, termino);
            const formattedData = data.map(item => ({
                "titulo": item.titulo,
                "texto": item.texto,
                "imagenes": item.imagenes || [item.imagen],
                "Pagina": item.Pagina,
                "Telefono": item.Telefono,
                "id": item.id,
                "href": item.href,
                "horario": item.horario
            }));
            setItems(formattedData);
        };

        loadItems();
    }, [isGastronomia, isEventos]);

    const handleVerMas = (card) => {
        navigate(`/componentereactivo/${card.titulo}`, { state: { card } }); // Corregido para asegurarse de que el ID sea un número
    };

    return (
        <div className='Container-divino' style={{ textAlign: 'center', marginBottom: '200px' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 'bold' }}>
                {isEventos ? 'EVENTOS' : isGastronomia ? 'GASTRONOMÍA' : isHospedaje ? 'HOSPEDAJES' : 'RESULTADO'}
            </h1>
            <Row>
                {items.map((card) => (
                    <Col key={card.id}>
                        <CardComponent id='componentecard'>
                            <CardComponent.Img className='CardComponent-imagenes' variant="top" src={card.imagenes[0]} />
                            <CardComponent.Title id='card-titulo'>{card.titulo}</CardComponent.Title>
                            <CardComponent.Body className='component-body'>
                                <CardComponent.Text className='CardComponent-texto'>{card.texto}</CardComponent.Text>
                                <button id="botonVerMas" onClick={() => handleVerMas(card)}>
                                    Ver más
                                </button>
                            </CardComponent.Body>
                        </CardComponent>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default GridExample;
