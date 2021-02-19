import React, { useReducer } from 'react';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import { getUsuariosByTipo, getGrados, getCursos, getCursosById } from '../../../services/adminServices';

const AdminState = (props) => {

    const [state, dispatch] = useReducer(AdminReducer, {
        usu_id: null,
        usu_tipo: "",
        curso_id: null,
        usuarios: [],
        grados: [],
        cursos: [],
        cursoDetalle: [],
        cargandoModal: false,
        cargandoUsuario: false,
        cargandoGrado: false,
        cargandoSpinner: false,
        seleccion: "",
        seleccionListadoCursos: "",
    });


    const setearTipo = (tipo) => {
        dispatch({
            type: "SETEAR_TIPO",
            data: {
                ...state,
                usu_tipo: tipo,
            }
        });
    };


    const setearIdUsuario = (id) => {
        dispatch({
            type: "SETEAR_ID_USUARIO",
            data: {
                ...state,
                usu_id: id,
            }
        });
    };


    const setearIdCurso = (id) => {
        dispatch({
            type: "SETEAR_ID_CURSO",
            data: {
                ...state,
                curso_id: id,
            }
        });
    };


    const setearUsuarios = (usu) => {
        dispatch({
            type: "SETEAR_USUARIOS",
            data: {
                ...state,
                usuarios: usu,
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


    const setearCursoDetalle = (cur) => {
        dispatch({
            type: "SETEAR_CURSO_DETALLE",
            data: {
                ...state,
                cursoDetalle: cur,
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


    const setearCargandoUsuario = (estado) => {
        dispatch({
            type: "SETEAR_CARGANDO_USUARIO",
            data: {
                ...state,
                cargandoUsuario: estado,
            }
        });
    };


    const setearCargandoGrado = (estado) => {
        dispatch({
            type: "SETEAR_CARGANDO_GRADO",
            data: {
                ...state,
                cargandoGrado: estado,
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


    const setearSeleccionListadoCursos = (sele) => {
        dispatch({
            type: "SETEAR_SELECCION_LISTADO_CURSOS",
            data: {
                ...state,
                seleccionListadoCursos: sele,
            }
        });
    };


    const usuariosListarPorTipo = (t) => {
        if (t !== "") {
            getUsuariosByTipo(t).then(data => {
                if (data.ok) {
                    setearUsuarios(data.content);
                    setearCargandoUsuario(false);
                }
            });
        } else {
            setearUsuarios([]);
            setearCargandoUsuario(false);
        }
    };


    const gradosListarAll = () => {
        setearCargandoSpinner(true);
        getGrados().then((data) => {
            // console.log("dataaaaaa grados", data);
            // console.log("dataaaaaa grados ok", data.ok);
            if (data.ok) {
                // console.log("dataaaaaa grados", data);
                setearGrados(data.content);
                setearCargandoSpinner(false);
            }
        });
    };


    const cursosListarAll = () => {
        setearCargandoSpinner(true);
        getCursos().then((data) => {
            // console.log("dataaaaaa cursos", data);
            if (data.ok) {
                // console.log("dataaaaaa cursos ok", data.content);
                setearCursos(data.content);
                setearCargandoSpinner(false);
            }
        });
    };


    const cursosListarById = (id) => {
        setearCargandoSpinner(true);
        getCursosById(id).then((data) => {
            // console.log("dataaaaaa cursos", data);
            if (data.ok) {
                // console.log("dataaaaaa cursos ok", data.content);
                if (data.content === null) {
                    setearCursos(data.content);
                } else {
                    let curso = [];
                    curso.push(data.content);
                    setearCursos(curso);
                }
                setearCargandoSpinner(false);
            }
        });
    };


    const cursosListarByIdDetalle = (id) => {
        setearCargandoSpinner(true);
        getCursosById(id).then((data) => {
            // console.log("dataaaaaa cursos", data);
            if (data.ok) {
                // console.log("dataaaaaa cursos ok", data.content);
                let curso = [];
                curso.push(data.content);
                setearCursoDetalle(curso);
                setearCargandoSpinner(false);
            }
        });
    };


    return (
        <AdminContext.Provider value={{
            usu_id: state.usu_id,
            usu_tipo: state.usu_tipo,
            curso_id: state.curso_id,
            usuarios: state.usuarios,
            grados: state.grados,
            cursos: state.cursos,
            cursoDetalle: state.cursoDetalle,
            cargandoModal: state.cargandoModal,
            cargandoUsuario: state.cargandoUsuario,
            cargandoGrado: state.cargandoGrado,
            cargandoSpinner: state.cargandoSpinner,
            seleccion: state.seleccion,
            seleccionListadoCursos: state.seleccionListadoCursos,
            setearTipo: setearTipo,
            setearIdUsuario: setearIdUsuario,
            setearIdCurso: setearIdCurso,
            setearUsuarios: setearUsuarios,
            setearCursos: setearCursos,
            setearCursoDetalle: setearCursoDetalle,
            setearCargandoModal: setearCargandoModal,
            setearCargandoUsuario: setearCargandoUsuario,
            setearCargandoGrado: setearCargandoGrado,
            setearCargandoSpinner: setearCargandoSpinner,
            setearSeleccion: setearSeleccion,
            setearSeleccionListadoCursos: setearSeleccionListadoCursos,
            usuariosListarPorTipo: usuariosListarPorTipo,
            gradosListarAll: gradosListarAll,
            cursosListarAll: cursosListarAll,
            cursosListarById: cursosListarById,
            cursosListarByIdDetalle: cursosListarByIdDetalle,
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;
