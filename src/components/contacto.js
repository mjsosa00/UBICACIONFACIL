// src/components/Contacto.js
import React from 'react';
import './Contacto.css'; // Importa el CSS

const Contacto = () => {
    return (
        <div className="contacto">
            <h2>Contacto</h2>
            <form>
                <label htmlFor="nombre y apellido">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Nombre y Apellido" />

                <label htmlFor="email"  >Email:</label>
                <input type="email" id="email" name="email" required  placeholder="Email" />
                <label htmlFor="telefono">Telefono:</label>
                <input type="tel" id="telefono" placeholder="Telefono:"></input>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required placeholder="Escribe un mensaje para que nuestro equipo de desarrolo entienda que necesitas..."></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;

