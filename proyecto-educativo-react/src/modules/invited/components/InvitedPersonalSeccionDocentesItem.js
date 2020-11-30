import React from 'react';

const InvitedPersonalSeccionDocentesItem = ({ docente }) => {
    return (
        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay={docente.delay}>
            <div className="staff text-center">
                <div className="mb-4"><img src={docente.imagen} alt={`staff_` + docente.id} className="img-fluid" /></div>
                <div className="staff-body">
                    <h3 className="staff-name">{docente.nombre} {docente.apellido}</h3>
                    <span className="d-block position mb-4">{docente.curso}</span>
                    <p className="mb-4">{docente.texto}</p>
                    <div className="social">
                        <a className="mx-2" rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-facebook"></i></span></a>
                        <a className="mx-2" rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-twitter"></i></span></a>
                        <a className="mx-2" rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-linkedin-in"></i></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvitedPersonalSeccionDocentesItem;
