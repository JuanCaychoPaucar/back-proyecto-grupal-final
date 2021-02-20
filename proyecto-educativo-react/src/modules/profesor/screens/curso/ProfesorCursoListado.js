import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../auth/context/AuthContext';
import ProfesorContext from '../../context/ProfesorContext';
import ProfesorTablaCursos from '../../components/ProfesorTablaCursos';
import Swal from "sweetalert2";

const ProfesorCursoListado = () => {

    const { usu_id, token } = useContext(AuthContext);
    const { cursos, cursosListarAllByUsuarioId } = useContext(ProfesorContext);

    useEffect(() => {
        cursosListarAllByUsuarioId(usu_id, token);
    }, [])

    return (
        <>
            <h5 className="text-center mb-3">
                LISTADO CURSOS
            </h5>

            <ProfesorTablaCursos />
        </>
    )
}

export default ProfesorCursoListado;
