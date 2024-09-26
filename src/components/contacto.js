// src/components/Contacto.js
import React from 'react';
import './Contacto.css'; // Importa el CSS

const Contacto = () => {
    return (
        <div className="contacto">
            <h2>Contacto</h2>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;

