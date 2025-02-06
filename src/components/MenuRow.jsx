import React from 'react'
import '../components/menu-row.css'

export default function MenuRow() {
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
        <>
            <nav className="menu-row">
                <ul>
                    <li><a href="#home" >Inicio</a></li>
                    <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection("#nosotros"); }}>Nosotros</a></li>
                    <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection("#servicios"); }}>Servicios</a></li>
                    <li><a href="#contactanos" onClick={(e) => { e.preventDefault(); scrollToSection("#contactanos"); }}>Contactanos</a></li>
                </ul>
            </nav>
        </>
    )
}
