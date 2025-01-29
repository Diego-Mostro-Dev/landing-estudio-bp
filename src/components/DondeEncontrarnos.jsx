import React from 'react'
import '../components/donde-encontrarnos.css'
import Icono from '../assets/IconosSvg/iconos/shield-half.svg'

export default function DondeEncontrarnos() {
    return (
        <>
            <section className="wrrapper-donde-encontrarnos">
                <h1>Donde encontrarnos</h1>
                <div className="datos-donde-encontrarnos">
                    <img src={Icono} alt="" className="icono-datos-donde-encontrarnos" />
                    <h3 className="texto-donde-encontrarnos">Joaquin Baigorria</h3>
                </div>
                <div className="datos-donde-encontrarnos">
                    <img src={Icono} alt="" className="icono-datos-donde-encontrarnos" />
                    <h3 className="texto-donde-encontrarnos">Joaquin Baigorria</h3>
                </div>
                <div className="datos-donde-encontrarnos">
                    <img src={Icono} alt="" className="icono-datos-donde-encontrarnos" />
                    <h3 className="texto-donde-encontrarnos">Joaquin Baigorria</h3>
                </div>
                <div className="datos-donde-encontrarnos">
                    <img src={Icono} alt="" className="icono-datos-donde-encontrarnos" />
                    <h3 className="texto-donde-encontrarnos">Joaquin Baigorria</h3>
                </div>
                <div className="datos-donde-encontrarnos">
                    <img src={Icono} alt="" className="icono-datos-donde-encontrarnos" />
                    <h3 className="texto-donde-encontrarnos">Joaquin Baigorria</h3>
                </div>
            </section>
        </>
    )
}
