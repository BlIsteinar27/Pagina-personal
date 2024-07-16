import React from 'react'


const ServiciosInicio = () => {
    return (
        <>
            <section className="service" id="service">
                <div className="service-text">
                    <h2>Mis Servicios</h2>
                    <h4>Nosotros trabajamos contigo, no para ti</h4>
                </div>
                <div className="service-item">
                    <div className="service-box">

                        <box-icon type="logo" name="javascript" color="red" size="lg"></box-icon>
                        <h3>Frontend</h3>
                        <p>Soy un desarrollador frontend con más de 3 años de experiencia en trabajos freelance y un profundo
                            conocimiento de HTML, CSS y JS. Estoy comprometido a crear diseños y experiencias interactivas atractivas y de alta calidad
                            para mis clientes. ¡Gracias por visitar mi perfil de Instagram!</p>
                        <a href="#" className="btn btn-outline-danger">Leer Más</a>
                    </div>
                    <div className="service-box">
                        <box-icon type="logo" name="nodejs" color="red" size="lg"></box-icon>

                        <h3>Backend</h3>
                        <p>Llevo desarrollando aplicaciones backend con Python y bases de datos desde hace 3 años con resultados
                            excepcionales en términos de experiencia de usuario. Estoy comprometido a proporcionar soluciones innovadoras y de alta calidad
                            para mis clientes.</p>
                        <a href="#" className="btn btn-outline-danger">Leer Más</a>
                    </div>
                    <div className="service-box">
                        <box-icon type="logo" name="firebase" color="red" size="lg"></box-icon>
                        <h3>Bases de Datos</h3>
                        <p>Soy experto en el uso de bases de datos como MySQL, Postgres y MySQLite para el desarrollo de
                            aplicaciones web impactantes. Poseo una amplia experiencia y estoy comprometido con la creación de soluciones innovadoras y
                            eficaces para satisfacer las necesidades de mis clientes.</p>
                        <a href="#" className="btn btn-outline-danger">Leer Más</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiciosInicio