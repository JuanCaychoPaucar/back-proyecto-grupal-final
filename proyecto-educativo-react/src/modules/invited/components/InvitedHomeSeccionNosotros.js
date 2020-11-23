import React from 'react';

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
                        <ul className="list-unstyled ul-check mb-5 primary aos-init aos-animate" data-aos="fade-up"
                            data-aos-delay="200">
                            <li>Separated they live</li>
                            <li>Bookmarksgrove right at the coast</li>
                            <li>large language ocean</li>
                        </ul>
                        <div className="row count-numbers mb-5">
                            <div className="col-4 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                                <span className="counter d-block"><span data-number="4000">4,000</span><span>+</span></span>
                                <span className="caption-2">Estudiantes</span>
                            </div>
                            <div className="col-4 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <span className="counter d-block"><span data-number="49">49</span><span></span></span>
                                <span className="caption-2">Docentes</span>
                            </div>
                            <div className="col-4 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <span className="counter d-block"><span data-number="12">12</span><span></span></span>
                                <span className="caption-2">Premios</span>
                            </div>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
                            <a href="!#" className="btn btn-primary">Admision</a>
                            <a href="!#" className="btn btn-outline-primary">Learn More</a>
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
