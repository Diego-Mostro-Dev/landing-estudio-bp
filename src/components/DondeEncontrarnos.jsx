import React from 'react'
import '../components/donde-encontrarnos.css'
import Telefono from '../assets/IconosSvg/iconos-azul/phone-azul.svg'
import Correo from '../assets/IconosSvg/iconos-azul/mail-azul.svg'
import Direccion from '../assets/IconosSvg/iconos-azul/map-pin-azul.svg'
import Horarios from '../assets/IconosSvg/iconos-azul/clock-azul.svg'

export default function DondeEncontrarnos() {
    return (
        <>
            <section className="wrapper-donde-encontrarnos">
                <h1 className='titulo-donde-encontrarnos'>¿Donde encontrarnos?</h1>
                <div className="datos-donde-encontrarnos">
                    <a href="https://wa.me/543416052724?text=Hola,%20quiero%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                        <img src={Telefono} alt="" className="icono-datos-donde-encontrarnos" loading='lazy' />
                        <h3 className="texto-donde-encontrarnos">Joaquin Baigorria: 0341 605-2724</h3>
                    </a>
                </div>

                <div className="datos-donde-encontrarnos">
                    <a href="https://wa.me/543413041022?text=Hola,%20quiero%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                        <img src={Telefono} alt="" className="icono-datos-donde-encontrarnos" loading='lazy' />
                        <h3 className="texto-donde-encontrarnos">Daniel Papalardo: 0341 304-1022</h3>
                    </a>
                </div>

                <div className="datos-donde-encontrarnos">
                    <img src={Correo} alt="" className="icono-datos-donde-encontrarnos" loading='lazy' />
                    <h3 className="texto-donde-encontrarnos">baigorriapapalardo@gmail.com</h3>
                </div>
                <div className="datos-donde-encontrarnos">
                    <img src={Direccion} alt="" className="icono-datos-donde-encontrarnos" loading='lazy' />
                    <h3 className="texto-donde-encontrarnos">Maipú 778 Piso 2. Oficina 3. Rosario, Santa Fe</h3>
                </div>
                <div className="datos-donde-encontrarnos">
                    <img src={Horarios} alt="" className="icono-datos-donde-encontrarnos" loading='lazy' />
                    <h3 className="texto-donde-encontrarnos">Horarios: Lunes a Viernes de 8:00 a 17:00</h3>
                </div>
            </section>
        </>
    )
}
