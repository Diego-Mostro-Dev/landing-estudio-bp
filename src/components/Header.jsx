import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../assets/Logo/bp_logo transparente_BCO.webp';
import MenuHamburguesa from './MenuHamburguesa';
import MenuRow from './MenuRow';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        checkWidth();  // Verifica al cargar el componente

        window.addEventListener('resize', checkWidth);  // Escucha cambios en el tamaño de la ventana

        return () => window.removeEventListener('resize', checkWidth);  // Limpia el evento al desmontar el componente
    }, []);

    return (
        <div className="wrapper-header">
            <a href="#home" className="logo-home">
                <img src={Logo} alt="Logo Baigorria Papalardo" loading='lazy' />
            </a>
            {isMobile ? <MenuHamburguesa /> : <MenuRow />}
        </div>
    );
}
