import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../components/form.css";

export default function Form() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        emailjs.send(
            "YOUR_SERVICE_ID",   // Reemplaza con tu Service ID
            "YOUR_TEMPLATE_ID",  // Reemplaza con tu Template ID
            {
                from_name: formData.nombre,
                from_email: formData.email,
                subject: formData.asunto,
                message: formData.mensaje,
            },
            "YOUR_PUBLIC_KEY"  // Reemplaza con tu Public Key
        )
            .then((response) => {
                console.log("Éxito!", response);
                alert("Mensaje enviado correctamente.");
                setFormData({ nombre: "", email: "", asunto: "", mensaje: "" }); // Limpia el formulario
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Hubo un error al enviar el mensaje.");
            });
    };

    return (
        <form onSubmit={handleSubmit} className="formulario-contacto">
            <div className="form-group">
                <label htmlFor="nombre" className="label-contacto">
                    Nombre *
                </label>
                <input
                    type="text"
                    id="nombre"
                    className="input-contacto"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="label-contacto">
                    E-mail *
                </label>
                <input
                    type="email"
                    id="email"
                    className="input-contacto"
                    placeholder="nombre@dominio.com"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="asunto" className="label-contacto">
                    Asunto *
                </label>
                <input
                    type="text"
                    id="asunto"
                    className="input-contacto"
                    placeholder="Asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="mensaje" className="label-contacto">
                    Mensaje *
                </label>
                <textarea
                    id="mensaje"
                    className="input-contacto"
                    placeholder="Escriba tu consulta"
                    value={formData.mensaje}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit" className="btn-enviar">
                Enviar
            </button>
            <h4 className="Obligatorio">* Los campos son obligatorios</h4>
        </form>
    );
}
