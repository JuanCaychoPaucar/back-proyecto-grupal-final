import React from 'react';
import { NavLink } from "react-router-dom";

const InvitedHomeSeccionPensionItem = ({ nivel }) => {
    return (
        <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay={nivel.delay}>
            <div className="pricing">
                <div className="pricing-img mb-4"><img src={nivel.imagen} alt={nivel.grado} className="img-fluid"
                    data-pagespeed-url-hash="2058289295" /></div>
                <div className="pricing-body">
                    <h3 className="pricing-plan">{nivel.grado}</h3>
                    <p className="mb-4">{nivel.texto}</p>
                    <div className="price"><span className="fig">S/ {nivel.pension}</span><span>/mes</span></div>
                    <p>
                        <NavLink to={"/"} className="boton boton-outline-personalizado">ADMISION</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InvitedHomeSeccionPensionItem;
