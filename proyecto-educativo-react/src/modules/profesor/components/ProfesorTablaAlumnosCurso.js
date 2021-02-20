import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import ProfesorContext from '../context/ProfesorContext';


const ProfesorTablaAlumnosCurso = ({ alumnos }) => {

    const { cargandoAlumnos } = useContext(ProfesorContext);

    useEffect(() => {

    }, [alumnos])

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
                            <th>Acciones</th>
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
                                alumnos.usuarios.map((alu) => (
                                    <tr key={alu.usuario_id}>
                                        <td className="align-middle">{alu.usuario_id}</td>
                                        <td className="align-middle">{alu.usuario_nombre}</td>
                                        <td className="align-middle">{alu.usuario_apep}</td>
                                        <td className="align-middle">{alu.usuario_apem}</td>
                                        <td>
                                            Hola
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

export default ProfesorTablaAlumnosCurso;
