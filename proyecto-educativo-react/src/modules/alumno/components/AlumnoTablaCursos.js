import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';

import AlumnoCursoNotas from '../screens/curso/AlumnoCursoNotas';

import AuthContext from '../../auth/context/AuthContext';
import AlumnoContext from '../context/AlumnoContext';

const AlumnoTablaCursos = () => {

    const { token } = useContext(AuthContext);
    const { cursos, seleccion, cargandoCursos, cargandoModal, setearSeleccion, setearCargandoModal } = useContext(AlumnoContext);
    const [mensaje, setMensaje] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setearSeleccion("");
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        setearCargandoModal(true);
    };


    // console.log("CURSOS PARA TABLA", cursos.cursos);

    useEffect(() => {
        if (typeof cursos.cursos === "undefined") {
            setMensaje("El grado aún no tiene cursos disponibles.")
        } else if (cursos.length === 0) {
            setMensaje("El grado aún no tiene cursos disponibles.")
        }
    }, [cursos, mensaje, seleccion]);


    return (
        <div className="row mt-4">

            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Curso</th>
                            <th>Profesor</th>
                            <th colSpan="2">Horario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargandoCursos ?
                            <tr>
                                <td colSpan="6">
                                    <Spinner animation="grow" variant="secondary" />
                                </td>
                            </tr>
                            :
                            typeof cursos.cursos === "undefined" ?
                                <tr>
                                    <td colSpan="6">{mensaje}</td>
                                </tr>
                                :
                                cursos.cursos.length === 0 ?
                                    <tr>
                                        <td colSpan="6">{mensaje}</td>
                                    </tr>
                                    :
                                    cursos.cursos.map((cur) => (
                                        <tr key={cur.curso_id}>
                                            <td className="align-middle">{cur.curso_id}</td>
                                            <td className="align-middle">{cur.curso_nombre}</td>
                                            <td className="align-middle">{cur.usuario.usuario_apep + " " + cur.usuario.usuario_apep + ", " + cur.usuario.usuario_nombre}</td>
                                            <td className="align-middle">{cur.curso_horaini}:00</td>
                                            <td className="align-middle">{cur.curso_horafin}:00</td>
                                            <td>
                                                <Button
                                                    variant="warning"
                                                    onClick={() => {
                                                        setearSeleccion(cur.curso_id);
                                                        handleShow();
                                                    }}
                                                >
                                                    Ver notas
                                                </Button>
                                                <Modal size="sm" show={seleccion == cur.curso_id ? true : false} onHide={handleClose}>
                                                    <Modal.Header closeButton={!cargandoModal}>
                                                        <Modal.Title>Notas</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <AlumnoCursoNotas curso={cur.curso_nombre} />
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

export default AlumnoTablaCursos;
