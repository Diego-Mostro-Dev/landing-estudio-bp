import React from 'react'
import './header.css'
import Logo from '../assets/Logo/Logo.png'
import Nav from './Nav'

export default function Header() {
    return (
        <>
            <div className="wrapper-header">
                <img src={Logo} alt="Logo Baigorria Papalardo" />
                <Nav></Nav>
            </div>
        </>
    )
}
