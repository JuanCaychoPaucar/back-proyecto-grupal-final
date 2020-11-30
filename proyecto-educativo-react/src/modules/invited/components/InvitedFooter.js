import React from 'react';
import moment from 'moment';

const InvitedFooter = () => {
    const anioActual = moment().format('YYYY');

    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mr-auto">
                        <div className="widget">
                            <h3>Acerca de Nosotros<span className="text-primary">.</span> </h3>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                        </div>

                        <div className="widget">
                            <h3>Síguenos</h3>
                            <ul className="list-unstyled social">
                                <li><a rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-instagram"></i></span></a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-twitter"></i></span></a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-facebook"></i></span></a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-linkedin-in"></i></span></a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-pinterest"></i></span></a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.google.com.pe" target="_blank"><span><i className="fab fa-dribbble"></i></span></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-3">
                        <div className="widget">
                            <h3>Contacto</h3>
                            <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                            <ul className="list-unstyled links mb-4">
                                <li><a href="tel://5114567890">+51(1) 456-7890</a></li>
                                <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p>
                            Copyright © {anioActual} All rights reserved | This template is made with
                            <i className="fas fa-heart text-danger mx-2"></i>
                            by
                            <a className="text-danger ml-2" rel="nofollow noopener noreferrer" href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvitedFooter;
