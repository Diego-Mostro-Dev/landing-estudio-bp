import React from 'react'
import '../components/servicios.css'
import icono from '../assets/IconosSvg/iconos/bulb.svg'

export default function Servicios() {
    return (
        <>
            <section id="servicios" className="wrapper-servicios">
                <h1 className="titulo-servicios">Servicios externos</h1>
                <p className="descripcion-servicios">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="grid-servicios">
                    <div className="servicios-externos">
                        <img src={icono} alt="" className="servicios-imagen" />
                        <h3 className="servicios-subtitulo">Contadora</h3>
                    </div>
                    <div className="servicios-externos">
                        <img src={icono} alt="" className="servicios-imagen" />
                        <h3 className="servicios-subtitulo">Escribanía</h3>
                    </div>
                    <div className="servicios-externos">
                        <img src={icono} alt="" className="servicios-imagen" />
                        <h3 className="servicios-subtitulo">Agente Inmobiliario</h3>
                    </div>
                    <div className="servicios-externos">
                        <img src={icono} alt="" className="servicios-imagen" />
                        <h3 className="servicios-subtitulo">Gestor</h3>
                    </div>
                    <div className="servicios-externos">
                        <img src={icono} alt="" className="servicios-imagen" />
                        <h3 className="servicios-subtitulo">Médico Legista</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
