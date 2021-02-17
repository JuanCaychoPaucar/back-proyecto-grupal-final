import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Sticky from 'react-sticky-el';
import { NavLink } from "react-router-dom";
import logoPrincipal from "../../../assets/img/Logo-INSBRUK-v2.png"
import logoPrincipalTransparente from "../../../assets/img/Logo-INSBRUK-transparente-v2.png"

import "./InvitedHeader.css";

import InvitedContext from '../context/InvitedContext'

const InvitedHeader = () => {

    const { informacion } = useContext(InvitedContext)

    return (
        <>
            <nav className="site-nav mb-5">

                <div className="pb-2 top-bar mb-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-lg-9">
                                <NavLink to={"/"} className="small mr-3">
                                    <span className="mr-2"><i className="far fa-question-circle"></i></span>
                                    <span className="d-none d-lg-inline-block">Alguna duda?</span>
                                </NavLink>

                                <NavLink to={"/"} className="small mr-3">
                                    <span className="mr-2"><i className="fas fa-phone-alt"></i></span>
                                    <span className="d-none d-lg-inline-block">+{informacion.telefono1}</span>
                                </NavLink>

                                <NavLink to={"/"} className="small mr-3">
                                    <span className="mr-2"><i className="fas fa-phone-alt"></i></span>
                                    <span className="d-none d-lg-inline-block">+{informacion.telefono2}</span>
                                </NavLink>

                                <NavLink to={"/"} className="small mr-3">
                                    <span className="mr-2"><i className="fas fa-envelope"></i></span>
                                    <span className="d-none d-lg-inline-block">{informacion.correo}</span>
                                </NavLink>
                            </div>

                            <div className="col-6 col-lg-3 text-right">
                                <NavLink to={"/auth"} className="small mr-3">
                                    <span className="mr-2"><i className="fas fa-lock"></i></span>
                                    <span className="d-none d-lg-inline-block">Ingresar</span>
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
                                <span className="aula-virtual">
                                    {/* <img className="logo-principal" src={logoPrincipal} alt=""/> */}
                                    <img className="logo-principal" src={logoPrincipalTransparente} alt="" />
                                </span>
                            </NavLink>

                            <ul className="js-clone-nav d-none d-lg-inline-block site-menu mt-1">
                                <li><NavLink to={"/"} className="sticky-active">Inicio</NavLink></li>
                                <li><NavLink to={"/personal"} className="sticky-active">Personal</NavLink></li>
                                <li><NavLink to={"/galeria"} className="sticky-active">Galeria</NavLink></li>
                                <li><NavLink to={"/nosotros"} className="sticky-active">Nosotros</NavLink></li>
                                <li><NavLink to={"/contacto"} className="sticky-active">Contacto</NavLink></li>
                            </ul>

                            <NavLink to={"/"} className="boton-book boton boton-personalizado boton-sm menu-absolute mr-3 mt-1">Admision</NavLink>

                            <Navbar className="p-0 menu-lateral" collapseOnSelect expand="992px">
                                <Navbar.Toggle className="d-lg-none mt-1" aria-controls="responsive-navbar-nav" >
                                    <span className="">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </Navbar.Toggle>

                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto mt-2 mt-lg-0">
                                        <ul className="site-menu-mobile">
                                            <li><NavLink to={"/"} className="site-menu-mobile-item">Inicio</NavLink></li>
                                            <li><NavLink to={"/personal"} className="site-menu-mobile-item">Personal</NavLink></li>
                                            <li><NavLink to={"/galeria"} className="site-menu-mobile-item">Galeria</NavLink></li>
                                            <li><NavLink to={"/nosotros"} className="site-menu-mobile-item">Nosotros</NavLink></li>
                                            <li><NavLink to={"/contacto"} className="site-menu-mobile-item">Contacto</NavLink></li>
                                        </ul>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </Sticky>
                {/* fin sticky */}

            </nav>
        </>
    )
}

export default InvitedHeader;
