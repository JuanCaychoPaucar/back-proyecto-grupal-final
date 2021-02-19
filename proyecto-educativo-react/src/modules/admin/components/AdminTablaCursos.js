import React, { useContext, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import AdminCursoDetallesScreen from '../screens/curso/AdminCursoDetallesScreen';
import AdminContext from '../context/AdminContext';

const content = {
    curso_id: 2,
    curso_nombre: "Lenguaje",
    curso_descripcion: "Aquí se aprende sobre la sintaxis y los acentos",
    curso_horaini: 10,
    curso_horafin: 12,
    curso_aforo: 35,
    usuario: {
        usuario_id: 3,
        usuario_nombre: "Luis",
        usuario_apep: "Gutierrez",
        usuario_apem: "Carrera",
    },
    grado: {
        grado_id: 1,
        grado_nivel: "Primaria",
        grado_numero: "Primero",
    }
}

const formularioVacio = {
    curso_id: "",
    curso_nombre: "",
    curso_descripcion: "",
    curso_horaini: "",
    curso_horafin: "",
    curso_aforo: "",
    grado_id: "",
    usuario_id: ""
};

const AdminTablaCursos = ({ cursos }) => {

    const { cargandoUsuario, cargandoModal, seleccion, setearCargandoUsuario, setearCargandoModal, setearSeleccion, seleccionListadoCursos } = useContext(AdminContext);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setearSeleccion("");
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        setearCargandoModal(true);
    };

    // console.log("CURSOS EN TABLA", cursos);
    return (
        <div className="row mt-4">

            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Curso</th>
                            <th>Profesor</th>
                            <th>Grado</th>
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
                            cursos === null ?
                                <tr>
                                    <td colSpan="6">No existe el registro</td>
                                </tr>
                                :
                                cursos.map((cur) => (
                                    <tr key={cur.curso_id}>
                                        <td className="align-middle">{cur.curso_id}</td>
                                        <td className="align-middle">{cur.curso_nombre}</td>
                                        <td className="align-middle">{cur.usuario.usuario_apep + " " + cur.usuario.usuario_apem + ", " + cur.usuario.usuario_nombre}</td>
                                        <td className="align-middle">{cur.grado.grado_nivel + " - " + cur.grado.grado_numero}</td>
                                        <td>
                                            <Button
                                                variant="secondary"
                                                onClick={() => {
                                                    setearSeleccion(cur.curso_id);
                                                    handleShow();
                                                }}
                                            >
                                                Detalles
                                        </Button>
                                            <Modal dialogClassName="modal-ancho" show={seleccion == cur.curso_id ? true : false} onHide={handleClose}>
                                                <Modal.Header closeButton={!cargandoModal}>
                                                    <Modal.Title>Detalles del curso</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <AdminCursoDetallesScreen id={cur.curso_id} />
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

export default AdminTablaCursos;
