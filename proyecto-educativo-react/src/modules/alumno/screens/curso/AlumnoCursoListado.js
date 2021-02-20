import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../auth/context/AuthContext';
import AlumnoContext from '../../context/AlumnoContext';
import AlumnoTablaCursos from '../../components/AlumnoTablaCursos';

const AlumnoCursoListado = () => {

    const { usu_id, token, grado_id } = useContext(AuthContext);
    const { cursos, cursosListarAllByGradoId } = useContext(AlumnoContext);

    useEffect(() => {
        cursosListarAllByGradoId(grado_id, token);
    }, [])

    return (
        <>
            <h5 className="text-center mb-3">
                LISTADO CURSOS DEL ALUMNO
            </h5>

            <AlumnoTablaCursos />
        </>
    )
}

export default AlumnoCursoListado;
