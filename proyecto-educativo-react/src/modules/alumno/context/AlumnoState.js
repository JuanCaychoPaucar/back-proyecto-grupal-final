import React, { useReducer } from 'react';
import AlumnoContext from './AlumnoContext';
import AlumnoReducer from './AlumnoReducer';

import { getCursosByGradoId } from '../../../services/alumnoServices';

const AlumnoState = (props) => {

    const [state, dispatch] = useReducer(AlumnoReducer, {
        curso_id: null,
        curso_nombre: "",
        cursos: [],
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

    const setearCursos = (cur) => {
        dispatch({
            type: "SETEAR_CURSOS",
            data: {
                ...state,
                cursos: cur,
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


    const cursosListarAllByGradoId = (id, token) => {
        setearCargandoSpinner(true);
        getCursosByGradoId(id, token).then((data) => {
            console.log("dataaaaaa cursos", data);
            if (data.ok) {
                console.log("dataaaaaa cursos ok", data.content);
                setearCursos(data.content);
                setearCargandoSpinner(false);
            }
        });
    };


    return (
        <AlumnoContext.Provider value={{
            curso_id: state.curso_id,
            curso_nombre: state.curso_nombre,
            cursos: state.cursos,
            cargandoCursos: state.cargandoCursos,
            cargandoModal: state.cargandoModal,
            cargandoSpinner: state.cargandoSpinner,
            seleccion: state.seleccion,
            setearIdCurso: setearIdCurso,
            setearCursoNombre: setearCursoNombre,
            setearCargandoModal: setearCargandoModal,
            setearSeleccion: setearSeleccion,
            cursosListarAllByGradoId: cursosListarAllByGradoId,
        }}>
            {props.children}
        </AlumnoContext.Provider>
    )
}

export default AlumnoState;