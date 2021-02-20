import React, { useContext, useReducer } from 'react';
import ProfesorContext from './ProfesorContext';
import ProfesorReducer from './ProfesorReducer';

import AuthContext from '../../auth/context/AuthContext';

import { getCursosByUsuarioId, getAlumnosByCursoId } from '../../../services/profesorServices';

const ProfesorState = (props) => {

    const { token } = useContext(AuthContext);

    const [state, dispatch] = useReducer(ProfesorReducer, {
        curso_id: null,
        curso_nombre: "",
        alumnos: [],
        grados: [],
        cursos: [],
        cargandoAlumnos: false,
        cargandoCursos: false,
        cargandoModal: false,
        cargandoSpinner: false,
        seleccion: "",
    });

    const setearIdCurso = (id) => {
        dispatch({
            type: "SETEAR_ID_CURSO",
            data: {
                ...state,
                curso_id: id,
            }
        });
    };

    const setearCursoNombre = (nombre) => {
        dispatch({
            type: "SETEAR_CURSO_NOMBRE",
            data: {
                ...state,
                curso_nombre: nombre,
            }
        });
    };

    const setearAlumnos = (alu) => {
        dispatch({
            type: "SETEAR_ALUMNOS",
            data: {
                ...state,
                alumnos: alu,
            }
        });
    };

    const setearGrados = (gra) => {
        dispatch({
            type: "SETEAR_GRADOS",
            data: {
                ...state,
                grados: gra,
            }
        });
    };

    const setearCursos = (cur) => {
        dispatch({
            type: "SETEAR_CURSOS",
            data: {
                ...state,
                cursos: cur,
            }
        });
    };

    const setearCargandoAlumnos = (estado) => {
        dispatch({
            type: "SETEAR_CARGANDO_ALUMNOS",
            data: {
                ...state,
                cargandoAlumnos: estado,
            }
        });
    };

    const setearCargandoCursos = (estado) => {
        dispatch({
            type: "SETEAR_CARGANDO_CURSOS",
            data: {
                ...state,
                cargandoCursos: estado,
            }
        });
    };

    const setearCargandoModal = (estado) => {
        dispatch({
            type: "SETEAR_CARGANDO_MODAL",
            data: {
                ...state,
                cargandoModal: estado,
            }
        });
    };

    const setearCargandoSpinner = (estado) => {
        dispatch({
            type: "SETEAR_CARGANDO_SPINNER",
            data: {
                ...state,
                cargandoSpinner: estado,
            }
        });
    };

    const setearSeleccion = (id) => {
        dispatch({
            type: "SETEAR_SELECCION",
            data: {
                ...state,
                seleccion: id,
            }
        });
    };


    const cursosListarAllByUsuarioId = (id, token) => {
        setearCargandoSpinner(true);
        getCursosByUsuarioId(id, token).then((data) => {
            // console.log("dataaaaaa cursos", data);
            if (data.ok) {
                // console.log("dataaaaaa cursos ok", data.content);
                setearCursos(data.content);
                setearCargandoSpinner(false);
            }
        });
    };


    const alumnosListarAllByCursoId = (id, token) => {
        setearCargandoAlumnos(true);
        getAlumnosByCursoId(id, token).then((data) => {
            // console.log("dataaaaaa alumnos cursos", data);
            if (data.ok) {
                // console.log("dataaaaaa alumnos cursos ok", data.content);
                setearAlumnos(data.content);
                setearCargandoAlumnos(false);
            }
        });
    };

    return (
        <ProfesorContext.Provider value={{
            curso_id: state.curso_id,
            curso_nombre: state.curso_nombre,
            alumnos: state.alumnos,
            grados: state.grados,
            cursos: state.cursos,
            cargandoAlumnos: state.cargandoAlumnos,
            cargandoCursos: state.cargandoCursos,
            cargandoModal: state.cargandoModal,
            cargandoSpinner: state.cargandoSpinner,
            seleccion: state.seleccion,
            cursosListarAllByUsuarioId: cursosListarAllByUsuarioId,
            alumnosListarAllByCursoId: alumnosListarAllByCursoId,
            setearIdCurso: setearIdCurso,
            setearCursoNombre: setearCursoNombre,
            setearCargandoModal: setearCargandoModal,
            setearSeleccion: setearSeleccion,
        }}>
            {props.children}
        </ProfesorContext.Provider>
    )
}

export default ProfesorState;
