import React from 'react'
import './hero.css'
import Mail from '../assets/IconosSvg/mail.svg'

export default function Hero() {
    return (
        <>
            <div className="hero" id='#home'>
                <h1 className="titulo-hero">
                    Estudio <span className="resaltado">Baigorria</span> <span className="resaltado">Papalardo</span> y asoc
                </h1>
                <p className="texto-hero">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#contactanos" className='btn-hero'>
                    <img src={Mail} alt="" />
                    Contactanos
                </a>
            </div>
        </>
    )
}
