import React from 'react';
import { HashLink } from 'react-router-hash-link';

import "./InvitedHomeSeccionPrincipal.css";

const InvitedHomeSeccionPrincipal = ({ texto }) => {

    return (
        <>
            <div className="untree_co-hero overlay fondo-principal">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-left">
                                <div className="col-lg-6 text-center text-lg-left">
                                    <h1 className="mb-4 heading text-white aos-init aos-animate" data-aos="fade-up"
                                        data-aos-delay="100">{texto.titulo}</h1>
                                    <div className="mb-5 text-white desc mx- aos-init aos-animate" data-aos="fade-up"
                                        data-aos-delay="200">
                                        <p>{texto.parrafo}</p>
                                    </div>
                                    <p className="mb-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                        <HashLink className="boton boton-personalizado" to={`/#oferta-educativa`}>Explorar</HashLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvitedHomeSeccionPrincipal;
