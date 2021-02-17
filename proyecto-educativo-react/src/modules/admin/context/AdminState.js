import React, { useEffect, useReducer } from 'react';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import { getUsuariosByTipo } from '../../../services/adminServices';

const AdminState = (props) => {

    const [state, dispatch] = useReducer(AdminReducer, {
        usu_id: null,
        usu_tipo: "",
        usuarios: [],
        cargandoModal: false,
        cargandoUsuario: false,
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


    const setearUsuarios = (usu) => {
        dispatch({
            type: "SETEAR_USUARIOS",
            data: {
                ...state,
                usuarios: usu,
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


    const usuariosListarPorTipo = (t) => {
        if (t !== "") {
            getUsuariosByTipo(t).then(data => {
                console.log("USUARIOS POR TIPO", data.content);
                setearUsuarios(data.content);
                setearCargandoUsuario(false);

                // setUsuarios(data.content);
            });
        } else {
            setearUsuarios([]);
            setearCargandoUsuario(false);
        }
    }

    return (
        <AdminContext.Provider value={{
            usu_id: state.usu_id,
            usu_tipo: state.usu_tipo,
            usuarios: state.usuarios,
            cargandoModal: state.cargandoModal,
            cargandoUsuario: state.cargandoUsuario,
            setearTipo: setearTipo,
            setearIdUsuario: setearIdUsuario,
            setearCargandoModal: setearCargandoModal,
            setearCargandoUsuario: setearCargandoUsuario,
            usuariosListarPorTipo: usuariosListarPorTipo,
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;
