import React, { useContext } from 'react';
import moment from 'moment';

import logoPrincipalFooter from "../../../assets/img/Logo-INSBRUK-v3.png";
import logoPrincipalFooterTransparente from "../../../assets/img/Logo-INSBRUK-transparente-v3.png";

import "./InvitedFooter.css";

import InvitedContext from '../context/InvitedContext'

const InvitedFooter = () => {

    const { informacion } = useContext(InvitedContext)
    const anioActual = moment().format('YYYY');

    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className=" widget contenedor-logo-principal-footer">
                            <figure className="figure-logo-principal-footer">
                                <img className="logo-principal-footer" src={logoPrincipalFooter} alt="" />
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-3 mr-auto">
                        <div className="widget">
                            <h3>Acerca de Nosotros<span className="text-primary">.</span> </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna.
                            </p>
                        </div>

                        <div className="widget">
                            <h3>Síguenos</h3>
                            <ul className="list-unstyled social">
                                <li className="ml-1"><a rel="nofollow noopener noreferrer" href={informacion.redes.instagram} target="_blank"><span><i className="fab fa-instagram"></i></span></a></li>
                                <li className="ml-1"><a rel="nofollow noopener noreferrer" href={informacion.redes.twitter} target="_blank"><span><i className="fab fa-twitter"></i></span></a></li>
                                <li className="ml-1"><a rel="nofollow noopener noreferrer" href={informacion.redes.facebook} target="_blank"><span><i className="fab fa-facebook"></i></span></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-3">
                        <div className="widget">
                            <h3>Contacto</h3>
                            <address>{informacion.direccion}</address>
                            <ul className="list-unstyled links mb-4">
                                <li><a href={"tel://" + informacion.telefono1.replace(/ /g, "")}>+{informacion.telefono1}</a></li>
                                <li><a href={"tel://" + informacion.telefono2.replace(/ /g, "")}>+{informacion.telefono2}</a></li>
                                <li><a href={"mailto:" + informacion.correo}>{informacion.correo}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-12 text-center">
                        <p>
                            Copyright © {anioActual} All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvitedFooter;
