import React from 'react'
import './header.css'
import Logo from '../assets/Logo/bp_logo transparente_BCO.webp'
import MenuHamburguesa from './MenuHamburguesa'

export default function Header() {
    return (
        <>
            <div className="wrapper-header">
                <a href="#home" className="logo-home">
                    <img src={Logo} alt="Logo Baigorria Papalardo" loading='lazy' />
                </a>
                <MenuHamburguesa />
            </div>
        </>
    )
}
