import React from 'react'
import './hero.css'
import Mail from '../assets/IconosSvg/mail.svg'

export default function Hero() {
    return (
        <>
            <div className="hero">
                <h1 className="titulo-hero">
                    Estudio <span className="resaltado">Baigorria</span> <span className="resaltado">Papalardo</span> y asoc
                </h1>
                <p className="texto-hero">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className='btn-hero'>
                    <img src={Mail} alt="" />
                    Contactanos
                </button>
            </div>
        </>
    )
}
