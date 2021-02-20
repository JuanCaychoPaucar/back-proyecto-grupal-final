import React, { useContext, useEffect, useState } from 'react';

import { postNotaCursoAlumno, putNotaCursoAlumnoByNotaId } from '../../../../services/profesorServices';

import AuthContext from '../../../auth/context/AuthContext';
import ProfesorContext from '../../context/ProfesorContext';
import Swal from "sweetalert2";

const formularioVacio = {
    notas_id: "",
    nota: 0,
    curso_id: "",
    alumno_id: ""
};

const ProfesorCursoAlumnoNota = ({ alu, handleClose, notaId, nuevaNota }) => {

    const { token } = useContext(AuthContext);
    const [formulario, setFormulario] = useState(formularioVacio);
    const { setearCargandoModal, curso_id, alumnosListarAllByCursoId } = useContext(ProfesorContext);
    const [modo, setModo] = useState("crear");

    const validarFormulario = () => {
        if (+formulario.nota >= 0 && +formulario.nota <= 20) {
            return true;
        } else {
            Swal.fire({
                title: "Error de ingreso!",
                text: "La calificacion debe estar entre 0 - 20",
                icon: "warning"
            });
        }
    };


    const handleChange = (e) => {
        let valor = e.target.value;

        setFormulario({
            ...formulario,
            [e.target.name]: valor,
            curso_id: curso_id,
            alumno_id: alu.usuario_id
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let validacion = validarFormulario();
        if (validacion) {

            if (modo === "crear") {
                // modo crear
                postNotaCursoAlumno(formulario, token).then((rpta) => {
                    console.log("CREACION NOTA", rpta);
                    if (rpta.ok) {
                        console.log("CREACION DE NOTA - OK");
                        alumnosListarAllByCursoId(curso_id, token);
                        handleClose();
                    }
                })

            } else {
                // modo editar
                let nuevo = {
                    notas_id: formulario.notas_id,
                    notas_calificacion: formulario.nota
                }
                putNotaCursoAlumnoByNotaId(nuevo, token).then((rpta) => {
                    console.log("FORMULARIO : ", nuevo);
                    console.log("ACTUALIZACION NOTA", rpta);
                    if (rpta.ok) {
                        console.log("ACTUALIZACION DE NOTA - OK");
                        alumnosListarAllByCursoId(curso_id, token);
                        handleClose();
                    }
                })
            }





        }
    };


    const traerNota = () => {
        if (nuevaNota === "--") {

        } else {
            let nuevoForm = {
                ...formulario,
                notas_id: notaId,
                nota: nuevaNota,
            }
            setFormulario(nuevoForm);
            setModo("editar");
        }
    }


    useEffect(() => {
        traerNota();
        setearCargandoModal(false);
    }, [])


    return (
        <>
            <div className="container">
                <h5 className="text-center mb-3">
                    ALUMNO - {alu.usuario_nombre.toUpperCase() + " " + alu.usuario_apep.toUpperCase() + " " + alu.usuario_apem.toUpperCase()}
                </h5>

                <div className="d-flex justify-content-around">
                    <form onSubmit={handleSubmit}>
                        <div className="row ">

                            <div className="col-md-7">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="nota"
                                    value={formulario.nota}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-5">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Calificar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfesorCursoAlumnoNota;
