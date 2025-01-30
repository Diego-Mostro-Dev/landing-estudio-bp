import React from 'react';
import './footer.css';
import Logo from '../assets/Logo/Logo.png';
import Instagram from '../assets/IconosSvg/redes/instagram.svg';
import Facebook from '../assets/IconosSvg/redes/facebook.svg';
import Mail from '../assets/IconosSvg/mail.svg';
import Mercadopago from '../assets/IconosSvg/redes/mercado-libre.svg';
import Banco from '../assets/IconosSvg/building-bank.svg';
import Tarjeta from '../assets/IconosSvg/credit-card.svg';

export default function Footer() {

    return (
        <>
            <article className="wrapper-footer">
                <section className="columna-logo-redes">
                    <img src={Logo} alt="" />
                    <div className="wrapper-iconos-redes">
                        <a href="https://www.instagram.com/estudiojuridico.b.p/" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="https://www.facebook.com/estudiobaigorriapapalardo" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt="" />
                        </a>
                        <a className="correo-estudio" href="mailto:estudiobaigorria" target="_blank" rel="noreferrer">
                            <img src={Mail} alt="" />
                        </a>
                    </div>
                </section>
                <section className="columna-medios-pago">
                    <h3 className="titulo-medios-pago">
                        Aceptamos <span className="resaltado">todos</span> los <span className="resaltado">medios de pago</span>
                    </h3>

                    <div className="wrapper-pagos">
                        <div className="mercado-pago" title="Mercado Pago">
                            <img src={Mercadopago} alt="" width={50} height={50} />
                            <h2 className="titulo-pagos">Mercado Pago</h2>
                        </div>
                        <div className="deposito" title="Depósito o Transferencia Bancaria">
                            <img src={Banco} alt="" width={50} height={50} />
                            <h2 className="titulo-pagos">Depósito o Transferencia Bancaria</h2>
                        </div>
                        <div className="efectivo" title="Efectivo o Tarjeta de Crédito">
                            <img src={Tarjeta} alt="" width={50} height={50} />
                            <h2 className="titulo-pagos">Efectivo o Tarjeta de Crédito</h2>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
