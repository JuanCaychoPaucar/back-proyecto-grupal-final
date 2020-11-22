import React from 'react';
import Sticky from 'react-sticky-el';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';
import InvitedHomeSeccionTarjetas from '../components/InvitedHomeSeccionTarjetas';

const InvitedHomeScreen = () => {
    return (
        <>
            <InvitedHeader />

            {/* INICIO MAIN */}
            <main>

                {/* INICIO SECCION PRINCIPAL */}
                <InvitedHomeSeccionPrincipal />
                {/* FIN SECCION PRINCIPAL */}

                {/* INICIO TARJETAS */}
                <InvitedHomeSeccionTarjetas />
                {/* FIN TARJETAS */}

                {/* INICIO SECCION OFERTA EDUCATIVA */}
                <div className="untree_co-section">
                    <div className="container">

                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-7 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                                <h2 className="line-bottom text-center mb-4">Nuestra Oferta Educativa</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there
                            live the blind texts.</p>
                            </div>
                        </div>

                        {/* INICIO CONTENEDOR CARDS */}
                        <div className="row">

                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 aos-init aos-animate" data-aos="fade-up"
                                data-aos-delay="100">
                                <div className="feature">
                                    <span className="icon-music_note color-1"></span>
                                    <h3>Clases de Musica</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>

                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 aos-init aos-animate" data-aos="fade-up"
                                data-aos-delay="200">
                                <div className="feature">
                                    <span className="icon-calculator color-2"></span>
                                    <h3>Clases de Matematica</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>

                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 aos-init aos-animate" data-aos="fade-up"
                                data-aos-delay="300">
                                <div className="feature">
                                    <span className="icon-leanpub color-3"></span>
                                    <h3>Clases de Ingles</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>

                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 aos-init aos-animate" data-aos="fade-up"
                                data-aos-delay="100&quot;">
                                <div className="feature">
                                    <span className="icon-book color-4"></span>
                                    <h3>Comprension Lectora</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>

                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 aos-init aos-animate" data-aos="fade-up"
                                data-aos-delay="200">
                                <div className="feature">
                                    <span className="icon-change_history color-5"></span>
                                    <h3>Clases de Historia</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>

                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 aos-init aos-animate" data-aos="fade-up"
                                data-aos-delay="300">
                                <div className="feature">
                                    <span className="icon-className color-6"></span>
                                    <h3>Active Class</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                                </div>
                            </div>

                        </div>
                        {/* FIN CONTENEDOR CARDS */}
                    </div>
                </div>
                {/* FIN SECCION OFERTA EDUCATIVA */}




                <div className="loader" style={{ display: "none" }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            </main>
            {/* FIN MAIN */}


            {/* INICIO FOOTER */}
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mr-auto">
                            <div className="widget">
                                <h3>Acerca de Nosotros<span className="text-primary">.</span> </h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                            </div>

                            <div className="widget">
                                <h3>Síguenos</h3>
                                <ul className="list-unstyled social">
                                    <li><a href="!#"><span className="icon-instagram"></span></a></li>
                                    <li><a href="!#"><span className="icon-twitter"></span></a></li>
                                    <li><a href="!#"><span className="icon-facebook"></span></a></li>
                                    <li><a href="!#"><span className="icon-linkedin"></span></a></li>
                                    <li><a href="!#"><span className="icon-pinterest"></span></a></li>
                                    <li><a href="!#"><span className="icon-dribbble"></span></a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-2 ml-auto">
                            <div className="widget">
                                <h3>Proyectos</h3>
                                <ul className="list-unstyled float-left links">
                                    <li><a href="!#">Web Design</a></li>
                                    <li><a href="!#">HTML5</a></li>
                                    <li><a href="!#">CSS3</a></li>
                                    <li><a href="!#">jQuery</a></li>
                                    <li><a href="!#">Bootstrap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget">
                                <h3>Galería</h3>
                                <ul className="instafeed instagram-gallery list-unstyled">
                                    <li><a className="instagram-item" href="images/gal_1.jpg" data-fancybox="gal"><img
                                        src="images/gal_1.jpg" alt="" width="72" height="72"
                                        data-pagespeed-url-hash="1621606107" /></a>
                                    </li>
                                    <li><a className="instagram-item" href="images/gal_2.jpg" data-fancybox="gal"><img
                                        src="images/gal_2.jpg" alt="" width="72" height="72"
                                        data-pagespeed-url-hash="1916106028" /></a>
                                    </li>
                                    <li><a className="instagram-item" href="images/gal_3.jpg" data-fancybox="gal"><img
                                        src="images/gal_3.jpg" alt="" width="72" height="72"
                                        data-pagespeed-url-hash="2210605949" /></a>
                                    </li>
                                    <li><a className="instagram-item" href="images/gal_4.jpg" data-fancybox="gal"><img
                                        src="images/gal_4.jpg" alt="" width="72" height="72"
                                        data-pagespeed-url-hash="2505105870" /></a>
                                    </li>
                                    <li><a className="instagram-item" href="images/gal_5.jpg" data-fancybox="gal"><img
                                        src="images/gal_5.jpg" alt="" width="72" height="72"
                                        data-pagespeed-url-hash="2799605791" /></a>
                                    </li>
                                    <li><a className="instagram-item" href="images/gal_6.jpg" data-fancybox="gal"><img
                                        src="images/gal_6.jpg" alt="" width="72" height="72"
                                        data-pagespeed-url-hash="3094105712" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget">
                                <h3>Contacto</h3>
                                <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                                <ul className="list-unstyled links mb-4">
                                    <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                                    <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                                    <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p>
                                Copyright ©
                                <script>document.write(new Date().getFullYear());</script>
                                2020 All rights reserved | This template is made with
                                <i className="icon-heart text-danger" aria-hidden="true"></i>
                                by
                                <a href="https://colorlib.com">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIN FOOTER */}

        </>
    )
}

export default InvitedHomeScreen;