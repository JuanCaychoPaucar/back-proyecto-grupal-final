import React from 'react';
import { NavLink } from "react-router-dom";

import "./InvitedHomeSeccionSecundaria.css";

const InvitedHomeSeccionSecundaria = () => {
    return (
        <div className="untree_co-section pt-0 bg-img overlay fondo-secundario">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-7">
                        <h2 className="text-white mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                            Educación para los Líderes del Mañana
                        </h2>
                        <p className="text-white h5 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna.
                        </p>
                        <p>
                            <NavLink to={"/"} className="boton boton-personalizado aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">Admision</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvitedHomeSeccionSecundaria;
