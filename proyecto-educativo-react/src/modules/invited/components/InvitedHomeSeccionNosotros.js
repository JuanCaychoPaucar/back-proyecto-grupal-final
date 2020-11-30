import React from 'react';
import { NavLink } from "react-router-dom";
import CountUp from 'react-countup';

import nosotros from "./../../../assets/img/about_1.jpg";

const InvitedHomeSeccionNosotros = () => {

    return (
        <div className="untree_co-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 mb-5">
                        <h2 className="line-bottom mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                            Nosotros
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <ul className="list-unstyled mb-5 primary aos-init aos-animate" data-aos="fade-up"
                            data-aos-delay="200">
                            <li><i className="fas fa-check mr-2"></i>Separated they live</li>
                            <li><i className="fas fa-check mr-2"></i>Bookmarksgrove right at the coast</li>
                            <li><i className="fas fa-check mr-2"></i>large language ocean</li>
                        </ul>
                        <div className="row count-numbers mb-5">
                            <div className={"col-4 col-lg-4 aos-init aos-animate"} data-aos="fade-up" data-aos-delay="0">
                                <span className="counter d-block"><CountUp end={4000} duration={20} onReset /><span>+</span></span>
                                <span className="caption-2">Estudiantes</span>
                            </div>
                            <div className="col-4 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <span className="counter d-block"><CountUp end={49} duration={20} /><span></span></span>
                                <span className="caption-2">Docentes</span>
                            </div>
                            <div className="col-4 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <span className="counter d-block"><CountUp end={12} duration={20} /><span></span></span>
                                <span className="caption-2">Premios</span>
                            </div>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
                            <NavLink to={"/"} className="boton boton-personalizado mr-2">Admision</NavLink>
                            {/* <a href="!#" className="boton boton-outline-personalizado">Learn More</a> */}
                        </p>
                    </div>
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                        <div className="bg-1"></div>
                        <img src={nosotros} alt="Image" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvitedHomeSeccionNosotros;
