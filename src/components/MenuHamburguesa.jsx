import React, { useState } from 'react';
import './menuHamburguesa.css';

export default function MenuHamburguesa() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="navegacion-2">
            <button onClick={toggleMenu} className={`btn-menu ${isOpen ? 'open' : ''}`}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <nav className={`menu ${isOpen ? 'is-open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#nosotros" onClick={toggleMenu}>Nosotros</a></li>
                    <li><a href="#servicios" onClick={toggleMenu}>Servicios</a></li>
                    <li><a href="#contactanos" onClick={toggleMenu}>Contactanos</a></li>
                </ul>
            </nav>
        </section>
    );
}
