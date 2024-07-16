import React from 'react'
import about from '../assets/img/about.png'

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="about-img">
                    <img src={about} alt />
                </div>
                <div className="about-text">
                    <h2>Acerca de mí</h2>
                    <h5>Soy diseñador y desarrollador web <span>creativo dinámico</span></h5>
                    <p>Como desarrollador web con conocimientos en HTML, CSS, JavaScript, PHP, Python, Bootstrap y bases de datos,
                        puedo crear aplicaciones web modernas y de alta calidad que satisfacen las necesidades de mis clientes. Además de tener experiencia
                        en varios lenguajes y tecnologías de desarrollo web, tengo habilidades de solución de problemas y trabajo en equipo. Es importante
                        mantenerse actualizado con las últimas tendencias y tecnologías para poder brindar soluciones de alta calidad. Con mi habilidad
                        para crear aplicaciones rápidas y eficientes, puedo ayudar a las empresas a satisfacer las necesidades de sus clientes de manera efectiva.</p>
                    <a href="#" className="btn btn-outline-danger">Mas sobre mi</a>
                </div>
            </section>
        </>
    )
}

export default About