import React from 'react';
import "./home.css";
import Hero from '../components/Hero';
import SobreNosotros from '../components/SobreNosotros';
import Header from '../components/Header';
import QuienesSomos from '../components/QuienesSomos';
import Servicios from '../components/Servicios';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';



export default function Home() {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <SobreNosotros></SobreNosotros>
            <QuienesSomos></QuienesSomos>
            <Servicios></Servicios>
            <Contacto></Contacto>
            <Footer></Footer>
        </>
    );
}
