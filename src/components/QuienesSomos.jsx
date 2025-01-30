import React from 'react'
import '../components/quienes-somos.css'
import Daniel from '../assets/Statics/Perfiles/Daniel Papalardo.webp'
import Joaquin from '../assets/Statics/Perfiles/Joaquin Baigorria.webp'

export default function QuienesSomos() {
    return (
        <>
            <section id="nosotros" className="wrapper-somos">
                <h1 className="title-somos">¿Quiénes somos?</h1>
                <div className="wrapper-card">
                    <div className="container-somos">
                        <img className="foto-card-somos-joaquin" src={Joaquin} alt="Foto Dr. Joaquin Baigorria" title='Dr. Joaquin Baigorria' />
                        <div className="card-somos">
                            <h2 className="titulo-card-somos">Dr. Joaquin Baigorria</h2>
                            <div className="wrapper-card-datos">
                                <small className='socio-datos'>Socio fundador</small>
                                <small className='socio-datos-abogados'>Abogado</small>
                                <p className="texto-card">
                                    Egresado Universidad Nacional
                                    de Rosario, el 12 Julio de 2012
                                </p>
                                <small className='datos-especialista'>Especialista en:</small>
                                <div className="wrapper-especialidades">
                                    <h3>Derecho laboral</h3>
                                    <h3>Accidentes de trabajo</h3>
                                    <h3>Sucesiones</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-somos">
                        <img className="foto-card-somos-daniel" src={Daniel} alt="Foto Dr. Daniel Papalardo" title='Dr. Daniel Papalardo' />
                        <div className="card-somos">
                            <h2 className="titulo-card-somos">Dr. Daniel Papalardo</h2>
                            <div className="wrapper-card-datos">
                                <small className='socio-datos'>Socio fundador</small>
                                <small className='socio-datos-abogados'>Abogado</small>
                                <p className="texto-card">
                                    Egresado Universidad Centro
                                    Educativo Latinoamericano,
                                    el 24 de Septiembre de 2018
                                </p>
                                <small className='datos-especialista'>Especialista en:</small>
                                <div className="wrapper-especialidades">
                                    <h3>Derecho penal</h3>
                                    <h3>Accidentes de trabajo</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
