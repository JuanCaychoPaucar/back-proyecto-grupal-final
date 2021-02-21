import React, { useContext, useState } from 'react';
import { withRouter } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
// import AdminCursoDetallesScreen from '../screens/curso/AdminCursoDetallesScreen';
import AuthContext from '../../auth/context/AuthContext';
import ProfesorContext from '../context/ProfesorContext';

const ProfesorTablaCursos = (props) => {

    const { token } = useContext(AuthContext);

    const { cursos, cargandoCursos, setearIdGrado, setearIdCurso, setearCursoNombre, alumnos, alumnosListarAllByGradoId } = useContext(ProfesorContext);

    const goToAlumnosVer = (gradoId, nom, cursoId) => {
        alumnosListarAllByGradoId(gradoId, token);
        setearIdCurso(cursoId);
        setearIdGrado(gradoId);
        setearCursoNombre(nom);
        props.history.push(`/profesor/curso/alumnos/${gradoId}`);
    };

    return (
        <div className="row mt-4">

            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Curso</th>
                            <th>Grado</th>
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
                            cursos === null ?
                                <tr>
                                    <td colSpan="6">No existe el registro</td>
                                </tr>
                                :
                                cursos.map((cur) => (
                                    <tr key={cur.curso_id}>
                                        <td className="align-middle">{cur.curso_id}</td>
                                        <td className="align-middle">{cur.curso_nombre}</td>
                                        <td className="align-middle">{cur.grado.grado_nivel + " - " + cur.grado.grado_numero}</td>
                                        <td className="align-middle">{cur.curso_horaini}:00</td>
                                        <td className="align-middle">{cur.curso_horafin}:00</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-block"
                                                onClick={() => {
                                                    goToAlumnosVer(cur.grado.grado_id, cur.curso_nombre, cur.curso_id);
                                                }}
                                            >
                                                Ver Alumnos
                                            </button>
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

export default withRouter(ProfesorTablaCursos);
