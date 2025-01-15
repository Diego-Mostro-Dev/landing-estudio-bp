import React from 'react'
import './hero.css'
import Mail from '../assets/IconosSvg/mail.svg'

export default function Hero() {
    return (
        <>
            <div className="hero">
                <h1 className="titulo-hero">
                    Estudio <span className="resaltado">Baigorria</span> los <span className="resaltado">Papalardo</span> y asoc
                </h1>
                <p className="texto-hero">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque sunt numquam porro doloribus magnam eaque officia ratione, quae, ducimus, repudiandae consequuntur dolores. Accusamus, perspiciatis earum placeat recusandae magnam quibusdam.
                </p>
                <button>
                    <img src={Mail} alt="" />
                    Contactános
                </button>
            </div>
        </>
    )
}
