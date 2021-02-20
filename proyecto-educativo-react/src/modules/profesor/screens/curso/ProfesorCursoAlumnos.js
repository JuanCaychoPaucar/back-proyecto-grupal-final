import React, { useContext, useEffect } from 'react';

import AuthContext from '../../../auth/context/AuthContext';
import ProfesorContext from '../../context/ProfesorContext';

import ProfesorTablaAlumnosCurso from '../../components/ProfesorTablaAlumnosCurso';

const ProfesorCursoAlumnos = () => {

    // const { token } = useContext(AuthContext);
    const { curso_id, curso_nombre, alumnos, alumnosListarAllByCursoId } = useContext(ProfesorContext);

    // useEffect(() => {
    //     alumnosListarAllByCursoId(curso_id, token);
    // }, [alumnos])

    return (
        <>
            <h5 className="text-center mb-3">
                ALUMNOS DEL CURSO - {curso_nombre.toUpperCase()}
            </h5>

            <ProfesorTablaAlumnosCurso alumnos={alumnos} />
        </>
    )
}

export default ProfesorCursoAlumnos;
