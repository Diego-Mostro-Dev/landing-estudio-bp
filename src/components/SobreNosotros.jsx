import React from 'react'
import '../components/sobreNosotros.css'
import Fondo from '../assets/Statics/Fondo-pagina2.webp'
import Idea from '../assets/IconosSvg/iconos/bulb.svg'
import Documento from '../assets/IconosSvg/iconos/script.svg'
import Seguridad from '../assets/IconosSvg/iconos/shield-half.svg'
import Escribir from '../assets/IconosSvg/iconos/writing.svg'
import Mail from '../assets/IconosSvg/mail.svg'

export default function SobreNosotros() {
    return (
        <>
            <div className="wrapper-nosotros">
                <section className="wrapper-sobre-nosotros">
                    <h1 className="titulo-sobre-nosotros">Sobre <span> nosotros</span></h1>
                </section>
                <section className="seccion-nosotros">
                    <div className="imagen-nosotros">
                        <img src={Fondo} height={'100%'} width={'100%'} alt="imagen-nosotros" />
                    </div>
                    <div className="wrapper-contenido-nosotros">
                        <div className="contenido-nosotros">
                            <img src={Idea} height={'100%'} width={'100%'} alt="" className="imagen-contenido" />
                            <h2 className="titulo-contenido">Estudio juridico dinamico, joven y proactivo</h2>
                        </div>
                        <div className="contenido-nosotros">
                            <img src={Documento} height={'100%'} width={'100%'} alt="" className="imagen-contenido" />
                            <h2 className="titulo-contenido">Constantemente actualizado de las novedades juridicas</h2>
                        </div>
                        <div className="contenido-nosotros">
                            <img src={Seguridad} height={'100%'} width={'100%'} alt="" className="imagen-contenido" />
                            <h2 className="titulo-contenido">Responsabilidad innegociable</h2>
                        </div>
                        <div className="contenido-nosotros">
                            <img src={Escribir} height={'100%'} width={'100%'} alt="" className="imagen-contenido" />
                            <h2 className="titulo-contenido">Solida experiencia en accidentes y enfermedades laborales</h2>
                        </div>
                    </div>
                </section>
                <section className="btn-nosotros">
                    <a href="#contactanos" className="btn-nosotros">
                        <img src={Mail} alt="" />
                        Contactanos
                    </a>
                </section>
            </div >
        </>
    )
}
