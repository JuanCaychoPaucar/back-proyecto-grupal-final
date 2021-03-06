import React, { useContext } from 'react';
import InvitedContext from '../context/InvitedContext';
import InvitedFooter from './InvitedFooter';

const InvitedContactoFormulario = () => {

    const { informacion } = useContext(InvitedContext);

    return (
        <>
            <div className="untree_co-section">
                <div className="container">

                    <div className="row mb-5">
                        <div className="col-lg-4 mb-5 order-2 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="contact-info">

                                <div className="address mt-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h4 className="mb-2">Direccion:</h4>
                                    <p>{informacion.direccion}</p>
                                </div>

                                <div className="open-hours mt-4">
                                    <i className="far fa-clock"></i>
                                    <h4 className="mb-2">Horario:</h4>
                                    <p>
                                        {informacion.horario[0]}<br></br>
                                        {informacion.horario[1]}
                                    </p>
                                </div>

                                <div className="email mt-4">
                                    <i className="fas fa-envelope"></i>
                                    <h4 className="mb-2">Email:</h4>
                                    <p>{informacion.correo}</p>
                                </div>

                                <div className="phone mt-4">
                                    <i className="fas fa-phone-alt"></i>
                                    <h4 className="mb-2">Teléfono:</h4>
                                    <p>+{informacion.telefono1}</p>
                                    <p>+{informacion.telefono2}</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-7 mr-auto order-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <form action="#">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Nombre y Apellido" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control" placeholder="Asunto" />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Mensaje"></textarea>
                                    </div>

                                    <div className="col-12">
                                        <input type="submit" value="Enviar mensaje" className="boton boton-personalizado" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default InvitedContactoFormulario;
