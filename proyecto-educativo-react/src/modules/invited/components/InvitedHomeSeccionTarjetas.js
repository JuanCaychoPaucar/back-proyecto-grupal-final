import React from 'react';
import AOS from 'aos';

import teach from "./../../../assets/img/teach.svg";

const InvitedHomeSeccionTarjetas = () => {

    AOS.init();

    return (

        <div className="untree_co-section py-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="block-v1 color-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                            {/* <span className="flaticon-teach"></span> */}
                            <div className="tarjeta-container">
                            <img className="tarjeta-item" src={teach} alt=""/>
                            </div>
                            <h3>Aprender</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="block-v1 color-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <span className="flaticon-bear"></span>
                            <h3>Jugar</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="block-v1 color-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <span className="flaticon-baby"></span>
                            <h3>Socializar</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InvitedHomeSeccionTarjetas;
