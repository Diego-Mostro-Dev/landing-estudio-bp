import React, { useState } from 'react';
import './menuHamburguesa.css';

export default function MenuHamburguesa() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // Ajusta el 80 según el tamaño del menú
                behavior: "smooth"
            });
        }
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
                    <li><a href="#home" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); toggleMenu(); scrollToSection("#nosotros"); }}>Nosotros</a></li>
                    <li><a href="#servicios" onClick={(e) => { e.preventDefault(); toggleMenu(); scrollToSection("#servicios"); }}>Servicios</a></li>
                    <li><a href="#contactanos" onClick={(e) => { e.preventDefault(); toggleMenu(); scrollToSection("#contactanos"); }}>Contactanos</a></li>
                </ul>
            </nav>
        </section>
    );
}
