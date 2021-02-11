import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import "./InvitedHomeSeccionPrincipal.css";

const InvitedHomeSeccionPrincipal = ({ texto }) => {

    const [contador, setContador] = useState(0);
    const [clase, setClase] = useState("fondo-principal");

    const count = () => {
        setTimeout(() => {
            let c = contador + 1;
            setContador(c)
        }, 1000);
    }

    useEffect(() => {
        count();
        if (contador === 5) {
            setClase("fondo-principal-2")
        } else if (contador === 10) {
            setClase("fondo-principal-3")
        } else if (contador === 15) {
            setClase("fondo-principal-4")
        } else if (contador === 20) {
            setClase("fondo-principal-5")
        } else if (contador === 25) {
            setClase("fondo-principal-6")
        } else if (contador === 30) {
            setContador(0)
            setClase("fondo-principal")
        }
    }, [contador])

    return (
        <>
            <div className={`untree_co-hero overlay + ${clase}`}>
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
                                        {/* <p>{contador}</p> */}
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
