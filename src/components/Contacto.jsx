import React from 'react'
import '../components/contacto.css'
import Form from './Form'
import DondeEncontrarnos from './DondeEncontrarnos'

export default function Contacto() {
    return (
        <>
            <section id="contactanos" className="wrapper-contacto">
                <div className="titulo-contacto">
                    <h2>Nuestro medio de <span>contacto</span></h2>
                </div>
                <h3 className="subtitulo-contacto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h3>
                <Form></Form>
                <DondeEncontrarnos></DondeEncontrarnos>
            </section>
        </>
    )
}
