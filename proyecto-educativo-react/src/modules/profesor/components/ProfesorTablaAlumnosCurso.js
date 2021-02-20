import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';

import ProfesorContext from '../context/ProfesorContext';
import ProfesorCursoAlumnoNota from '../screens/curso/ProfesorCursoAlumnoNota';


const ProfesorTablaAlumnosCurso = ({ alumnos }) => {

    const { curso_id, cargandoAlumnos, cargandoModal, seleccion, setearSeleccion, setearCargandoModal } = useContext(ProfesorContext);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setearSeleccion("");
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        setearCargandoModal(true);
    };

    useEffect(() => {

    }, [alumnos])

    return (
        <div className="row mt-4">
            <form className="col-md-12">
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido P</th>
                                <th>Apellido M</th>
                                <th>Nota</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cargandoAlumnos ?
                                <tr>
                                    <td colSpan="6">
                                        <Spinner animation="grow" variant="secondary" />
                                    </td>
                                </tr>
                                :
                                alumnos.usuarios.length === 0 ?
                                    <tr>
                                        <td colSpan="6">No se encontraron alumnos en este curso</td>
                                    </tr>
                                    :
                                    alumnos.usuarios.map((alu) => {
                                        let contador = 0;
                                        let arregloNotas = alu.notas;
                                        let nuevaNota = "";

                                        arregloNotas.map((arre) => {
                                            if (arre.curso_id === curso_id) {
                                                nuevaNota = arre.notas_calificacion;
                                                contador = contador + 1;
                                                return;
                                            }
                                        })

                                        if (contador === 0) {
                                            nuevaNota = "--"
                                        }



                                        return (
                                            <tr key={alu.usuario_id}>
                                                <td className="align-middle">{alu.usuario_id}</td>
                                                <td className="align-middle">{alu.usuario_nombre}</td>
                                                <td className="align-middle">{alu.usuario_apep}</td>
                                                <td className="align-middle">{alu.usuario_apem}</td>
                                                <td className="align-middle">{nuevaNota}</td>
                                                <td>
                                                    <Button
                                                        variant="warning"
                                                        onClick={() => {
                                                            setearSeleccion(alu.usuario_id);
                                                            handleShow();
                                                        }}
                                                    >
                                                        Calificar
                                                </Button>
                                                    <Modal size="lg" show={seleccion == alu.usuario_id ? true : false} onHide={handleClose}>
                                                        <Modal.Header closeButton={!cargandoModal}>
                                                            <Modal.Title>Asignacion de Notas</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <ProfesorCursoAlumnoNota alu={alu} handleClose={handleClose} />
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleClose} disabled={cargandoModal}>
                                                                Cerrar
                                                    </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )
                            }
                        </tbody>
                    </table>
                </div>

            </form>
        </div>
    )
}

export default ProfesorTablaAlumnosCurso;

/**

alumnos.usuarios.map((alu) => (
                                        <tr key={alu.usuario_id}>
                                            <td className="align-middle">{alu.usuario_id}</td>
                                            <td className="align-middle">{alu.usuario_nombre}</td>
                                            <td className="align-middle">{alu.usuario_apep}</td>
                                            <td className="align-middle">{alu.usuario_apem}</td>
                                            <td style={{ width: "140px" }}>
                                                <div >
                                                    <input type="number" className="form-control" style={{ maxWidth: "140px" }} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))

 */
