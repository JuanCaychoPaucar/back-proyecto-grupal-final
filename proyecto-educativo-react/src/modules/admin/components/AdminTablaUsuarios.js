import React, { useContext, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import AdminContext from '../context/AdminContext';

import AdminUsuarioDetallesScreen from '../screens/usuario/AdminUsuarioDetallesScreen';
import '../screens/usuario/AdminUsuarioDetallesScreen.css';


const AdminTablaUsuarios = ({ usuarios }) => {

    const { cargandoUsuario, cargandoModal, seleccion, setearCargandoUsuario, setearCargandoModal, setearSeleccion } = useContext(AdminContext);

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setearSeleccion("");
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        setearCargandoModal(true);
    };


    return (
        <div className="row mt-4">

            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido P</th>
                            <th>Apellido M</th>
                            <th>DNI</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargandoUsuario ?
                            <tr>
                                <td colSpan="6">
                                    <Spinner animation="grow" variant="secondary" />
                                </td>
                            </tr>
                            :
                            usuarios.map((usu) => (
                                <tr key={usu.usuario_id}>
                                    <td className="align-middle">{usu.usuario_id}</td>
                                    <td className="align-middle">{usu.usuario_nombre}</td>
                                    <td className="align-middle">{usu.usuario_apep}</td>
                                    <td className="align-middle">{usu.usuario_apem}</td>
                                    <td className="align-middle">{usu.usuario_dni}</td>
                                    <td>
                                        <Button
                                            variant="secondary"
                                            onClick={() => {
                                                setearSeleccion(usu.usuario_id);
                                                handleShow();
                                            }}
                                        >
                                            Detalles
                                        </Button>
                                        <Modal dialogClassName="modal-ancho" show={seleccion == usu.usuario_id ? true : false} onHide={handleClose}>
                                            <Modal.Header closeButton={!cargandoModal}>
                                                <Modal.Title>Detalles de usuario</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <AdminUsuarioDetallesScreen id={usu.usuario_id} />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose} disabled={cargandoModal}>
                                                    Cerrar
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminTablaUsuarios;
