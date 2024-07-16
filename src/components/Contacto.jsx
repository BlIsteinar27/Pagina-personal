import React from 'react'

const Contacto = () => {
    return (
        <>
            <section className="contact" id="contact">
                <div className="contact-left">
                    <div className="in">
                        <box-icon type="logo" name="instagram" color="red" size="lg"></box-icon>
                        <h4>Instagram</h4>
                    </div>
                    <div className="in">
                        <box-icon type="logo" name="telegram" color="red" size="lg"></box-icon>
                        <h4>Telegram</h4>
                    </div>
                    <div className="in">
                        <box-icon type="logo" name="discord" color="red" size="lg"></box-icon>
                        <h4>Discord</h4>
                    </div>
                    <div className="in">
                        <box-icon type="logo" name="linkedin" color="red" size="lg"></box-icon>
                        <h4>LinkedIn</h4>
                    </div>
                </div>
                <div className="contact-right">
                    <h2>Perfil</h2>
                    <a href="#">Hablame</a>
                    <p>¿Quieres iniciar un proyecto empresarial o personal, como una tesis u otro emprendimiento?
                        ¡Háblame sin compromiso alguno! Comunícate conmigo y juntos trabajaremos en la creación de algo grandioso. </p>
                </div>
            </section>

        </>
    )
}

export default Contacto