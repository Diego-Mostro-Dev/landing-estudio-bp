import React from 'react'
import './footer.css'
import Logo from '../assets/Logo/Logo.png'
import Instagram from '../assets/IconosSvg/redes/instagram.svg'
import Facebook from '../assets/IconosSvg/redes/facebook.svg'
import Mail from '../assets/IconosSvg/mail.svg'
import Mercadopago from '../assets/IconosSvg/redes/mercado-libre.svg'
import Banco from '../assets/IconosSvg/building-bank.svg'
import Tarjeta from '../assets/IconosSvg/credit-card.svg'
import Telefono from '../assets/IconosSvg/phone.svg'
import Pin from '../assets/IconosSvg/map-pin.svg'
import Horario from '../assets/IconosSvg/clock.svg'

export default function Footer() {
    return (
        <>
            <article className="wrapper-footer">
                <section className="columna-logo-redes">
                    <img src={Logo} alt="" />
                    <div className="wrapper-iconos-redes">
                        <a href="https://www.instagram.com/estudiojuridico.b.p/" target='_blank' rel="noreferrer">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="https://www.facebook.com/estudiobaigorriapapalardo" target='_blank' rel="noreferrer">
                            <img src={Facebook} alt="" />
                        </a>
                        <a className="correo-estudio" href="mailto:estudiobaigorria" target='_blank' rel="noreferrer">
                            <img src={Mail} alt="" />
                        </a>
                    </div>
                </section>
                <section className="columna-medios-pago">
                    <h3 className="titulo-medios-pago">
                        Aceptamos <span className="resaltado">todos</span> los <span className="resaltado">medios de pago</span>
                    </h3>

                    <div className="wrapper-pagos">
                        <div className="mercado-pago" title='Mercado Pago'>
                            <img src={Mercadopago} alt="" width={50} height={50} />
                            <h2 className="titulo-pagos">Mercado Pago</h2>
                        </div>
                        <div className="deposito" title='Depósito o Transferencia Bancaria'>
                            <img src={Banco} alt="" width={50} height={50} />
                            <h2 className="titulo-pagos">Depósito o Transferencia Bancaria</h2>
                        </div>
                        <div className="efectivo" title='Efectivo o Tarjeta de Crédito'>
                            <img src={Tarjeta} alt="" width={50} height={50} />
                            <h2 className="titulo-pagos">Efectivo o Tarjeta de Crédito</h2>
                        </div>
                    </div>
                </section>
                <section className="columna-contacto-footer">
                    {/* <div className="joaquin">
                        <img src={Telefono} alt="" />
                        <h2 className="titulo-contacto-footer">Joaquin Baigorria</h2>
                    </div>
                    <div className="daniel">
                        <img src={Telefono} alt="" />
                        <h2 className="titulo-contacto-footer">Daniel Papalardo</h2>
                    </div> */}
                    {/* <div className="columna-contacto-correo">
                        <img src={Mail} alt="" />
                        <h2 className="titulo-contacto-correo">baigorria.papalardo@gmail.com</h2>
                    </div> */}
                    <div title='Direccion' className="columna-contacto-direccion">
                        <img src={Pin} alt="" />
                        <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/Maip%C3%BA+778,+S2000+CGF,+Santa+Fe/@-32.9469334,-60.6362712,18z/data=!4m6!3m5!1s0x95b7ab1944ecc361:0x422aa9f579da3121!8m2!3d-32.9469087!4d-60.6352841!16s%2Fg%2F11c5plckk7?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D" className="direccion">
                            <h2 className="titulo-contacto-correo">Maipú 778 piso 2. Oficina 3. Rosario</h2>
                        </a>
                    </div>
                    <div title='Horarios' className="columna-contacto-horarios">
                        <img src={Horario} alt="" />
                        <h2 className="titulo-contacto-correo">Horarios</h2>
                    </div>
                </section>
            </article>
        </>
    )
}
