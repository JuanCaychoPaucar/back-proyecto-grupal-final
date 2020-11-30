import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";

const InvitedGaleriaSeccionFotosItem = ({ img }) => {

    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const imagenSeleccionada = (e) => {
        // console.log(e);
        setShow(true);
    }

    return (
        <>
            <NavLink to={"/galeria"} className="item-wrap fancybox mb-4 aos-init aos-animate" data-fancybox="gal" data-aos="fade-up" data-aos-delay={img.delay}
                onClick={imagenSeleccionada}>
                <span><i className="fas fa-search"></i></span>
                <img className="img-fluid" src={img.imagen} alt={'imagen_' + img.id} />
            </NavLink>

            {/* VENTANA MODAL */}
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Nuestra Galeria</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="modal-galeria">
                        <img className="modal-galeria-imagen" src={img.imagen} alt={'imagen_' + img.id} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default InvitedGaleriaSeccionFotosItem;
