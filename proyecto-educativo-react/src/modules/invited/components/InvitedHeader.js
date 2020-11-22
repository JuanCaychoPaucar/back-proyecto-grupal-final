import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Sticky from 'react-sticky-el';
import { NavLink } from "react-router-dom";

import "./InvitedHeader.css";

const InvitedHeader = () => {
    return (
        <>
            <nav className="site-nav mb-5">

                <div className="pb-2 top-bar mb-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-lg-9">
                                <NavLink to={"/"} className="small mr-3">
                                    <span className="icon-question-circle-o mr-2"></span>
                                    <span className="d-none d-lg-inline-block">Alguna duda?</span>
                                </NavLink>

                                <NavLink to={"/"} className="small mr-3">
                                    <span className="icon-phone mr-2"></span>
                                    <span className="d-none d-lg-inline-block">+51 1 444 4444</span>
                                </NavLink>

                                <NavLink to={"/"} className="small mr-3">
                                    <span className="icon-envelope mr-2"></span>
                                    <span className="d-none d-lg-inline-block">info@colegio.com</span>
                                </NavLink>
                            </div>

                            <div className="col-6 col-lg-3 text-right">
                                <NavLink to={"/auth"} className="small mr-3">
                                    <span className="icon-lock"></span>
                                    Ingresar
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>

                {/* inicio sticky */}
                <Sticky>
                    <div className="container position-relative mt-2">
                        <div className="site-navigation text-center">
                            <NavLink to={"/"} className="logo menu-absolute m-0 sticky-active">
                                COLEGIO
                                <span className="text-primary">.</span>
                            </NavLink>

                            <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                                <li><NavLink to={"/"} className="sticky-active">Inicio</NavLink></li>
                                <li><NavLink to={"/"} className="sticky-active">Personal</NavLink></li>
                                <li><NavLink to={"/"} className="sticky-active">Noticias</NavLink></li>
                                <li><NavLink to={"/"} className="sticky-active">Galeria</NavLink></li>
                                <li><NavLink to={"/"} className="sticky-active">Nosotros</NavLink></li>
                                <li><NavLink to={"/"} className="sticky-active">Contacto</NavLink></li>
                            </ul>

                            <NavLink to={"/"} className="btn-book btn btn-primary btn-sm menu-absolute mr-3">Inscribirse Ahora</NavLink>

                            <Navbar className="p-0 menu-lateral" collapseOnSelect expand="992px">
                                <Navbar.Toggle className="d-lg-none" aria-controls="responsive-navbar-nav" >
                                    <span className="">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </Navbar.Toggle>

                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto mt-2 mt-lg-0">
                                        <ul className="site-menu-mobile">
                                            <li><NavLink to={"/"} className="site-menu-mobile-item">Inicio</NavLink></li>
                                            <li><NavLink to={"/"} className="site-menu-mobile-item">Personal</NavLink></li>
                                            <li><NavLink to={"/"} className="site-menu-mobile-item">Noticias</NavLink></li>
                                            <li><NavLink to={"/"} className="site-menu-mobile-item">Galeria</NavLink></li>
                                            <li><NavLink to={"/"} className="site-menu-mobile-item">Nosotros</NavLink></li>
                                            <li><NavLink to={"/"} className="site-menu-mobile-item">Contacto</NavLink></li>
                                        </ul>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            {/* <NavLink to={"/"} className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse"><span></span></NavLink> */}
                            {/* <a href="!#"
                                className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                                data-toggle="collapse" data-target="#main-navbar">
                                <span></span>
                            </a> */}
                        </div>
                    </div>
                </Sticky>
                {/* fin sticky */}

            </nav>
        </>
    )
}

export default InvitedHeader;
