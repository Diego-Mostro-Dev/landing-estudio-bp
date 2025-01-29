import React from 'react';
import '../components/form.css'

export default function Form() {
    return (
        <>
            <form action="post" className="formulario-contacto">
                <div className="form-group">
                    <label htmlFor="nombre" className="label-contacto">
                        Nombre
                    </label>
                    <input type="text" id="nombre" className="input-contacto" placeholder="Escribe tu nombre" />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="label-contacto">
                        E-mail
                    </label>
                    <input type="email" id="email" className="input-contacto" placeholder="Escribe tu correo electrónico" />
                </div>

                <div className="form-group">
                    <label htmlFor="asunto" className="label-contacto">
                        Asunto
                    </label>
                    <input type="text" id="asunto" className="input-contacto" placeholder="Escribe el asunto" />
                </div>

                <div className="form-group">
                    <label htmlFor="mensaje" className="label-contacto">
                        Mensaje
                    </label>
                    <textarea id="mensaje" className="input-contacto" placeholder="Escribe tu mensaje"></textarea>
                </div>

                <button type="submit" className="btn-enviar">
                    Enviar
                </button>
            </form>
        </>
    );
}
