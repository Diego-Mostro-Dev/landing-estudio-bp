import React from 'react'
import './nav.css'

export default function Nav() {
    return (
        <>
            <nav >
                <ul className="navegacion">
                    <li><a href="/">Home</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/servicios">Novedades</a></li>
                    <li><a href="/contacto">Contactanos</a></li>
                </ul>
            </nav>
        </>
    )
}
