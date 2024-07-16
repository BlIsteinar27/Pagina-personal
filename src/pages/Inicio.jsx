import React from 'react'
import About from '../components/About'
import ServiciosInicio from '../components/ServiciosInicio'
import Blog from '../components/Blog'
import Contacto from '../components/Contacto'
import Hero from '../components/Hero'
import PortafolioInicio from '../components/PortafolioInicio'

const Inicio = () => {
    return (
        <>
            <Hero/>
            <About />
            <ServiciosInicio />
            <PortafolioInicio/>
            <Blog/>
            <Contacto/>
        </>
    )
}

export default Inicio