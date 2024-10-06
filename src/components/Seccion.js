import React from 'react';
import './Seccion.css';

const Seccion = () => {
    return (
        <section className="contenido">
            <h2>Restaurantes</h2>
            <p>Aquí puedes incluir texto adicional sobre tus servicios o productos.</p>
            
            <div className="foto-contenedor">
                <img
                    src="https://cdn.discordapp.com/attachments/1288981904149712982/1288981927537414215/image.png?ex=66f72977&is=66f5d7f7&hm=ba6eb283e75e14e5871ae7ad012844ea81d499ee34de35588718fe51a91aab55&"
                    alt="Foto 1"
                    className="imagen"
                />
                <div className="texto-lado">
                    <p>Descripción de la foto 1 al lado de la imagen.</p>
                </div>
            </div>
        </section>
    );
};

export default Seccion;
