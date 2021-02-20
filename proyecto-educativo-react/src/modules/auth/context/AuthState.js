import React, { useEffect, useReducer } from 'react';
import { verificarToken, getUsuarioPorCorreo } from '../../../services/authServices';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState = (props) => {

    const [state, dispatch] = useReducer(AuthReducer, {
        usu_id: null,
        usu_nombre: null,
        usu_apellido_pat: null,
        usu_apellido_mat: null,
        usu_email: null,
        usu_nacimiento: null,
        usu_sexo: null,
        usu_dni: null,
        usu_telefono: null,
        usu_foto: null,
        usu_tipo: null,
        usu_direccion: null,
        usu_estado: false,
        grado_id: null,
        autenticado: false,
        token: null,
        cargando: true,
    })

    const iniciarSesionConLocalStorage = () => {
        const token = localStorage.getItem("token");
        // console.log("token local storage", token);

        if (token) {
            // verificar el token con el backend
            verificarToken(token).then(data => {
                console.log(data);

                if (data.ok) {

                    iniciarSesion(token);

                } else {
                    dispatch({
                        type: "CERRAR_SESION",
                    });
                }

            });
        } else {
            
            dispatch({
                type: "CERRAR_SESION",
            });
        }
    };

    useEffect(() => {
        iniciarSesionConLocalStorage();
    }, []);

    /**
     * Funcion que sera llamada desde el formulario, luego de que el iniciode sesionsea correcto.
     * Esta funcionrecibira el token y actualizara el estado global conla informacion del usuario
     */
    const iniciarSesion = async (token) => {
        /**
         * la funcion split devuelve un arreglo de subcadenas dado el separador
         * ejem:
         * 1235dfdfdf.dgfgfgd.sdde
         * resultado: ["1235dfdfdf", "dgfgfgd", "sdde"]
         */

        const payload = token.split(".")[1];
        // console.log("TOKEN",token);
        // console.log("PAYLOAD",payload);

        // vamos a desencriptar el payload que esta en base-64
        // window.atob("cadenaencriptada") desencripta una cadena en base-64

        const payloadDesencriptado = window.atob(payload);
        // console.log(payloadDesencriptado);

        const payloadJSON = JSON.parse(payloadDesencriptado);
        // console.log("payloadJSON", payloadJSON);
        const tipo = payloadJSON.tipo;
        let email = payloadJSON.email;
        // console.log(tipo);

        let usuario = await getUsuarioPorCorreo(email).then((data) => {
            return data.content;
        });

        // console.log("USUARIO", usuario);

        // console.log("USUARIO_NOMBRE", usuario.usuario_nombre);

        // Variables
        let id = usuario.usuario_id;
        let nombre = usuario.usuario_nombre;
        let apellidoPat = usuario.usuario_apep;
        let apellidoMat = usuario.usuario_apem;
        let nacimiento = usuario.usuario_fechnac;
        let sexo = usuario.usuario_sexo;
        let dni = usuario.usuario_dni;
        let telefono = usuario.usuario_telefono;
        let foto = usuario.usuario_foto;
        let direccion = usuario.usuario_direccion;
        let estado = usuario.usuario_estado;
        let gradoId = usuario.grado_id;

        localStorage.setItem("token", token);

        dispatch({
            type: "INICIAR_SESION",
            data: {
                ...payloadJSON,
                token: token,
                usu_id: id,
                usu_nombre: nombre,
                usu_apellido_pat: apellidoPat,
                usu_apellido_mat: apellidoMat,
                usu_email: email,
                usu_nacimiento: nacimiento,
                usu_sexo: sexo,
                usu_dni: dni,
                usu_telefono: telefono,
                usu_foto: foto,
                usu_tipo: tipo,
                usu_direccion: direccion,
                usu_estado: estado,
                grado_id: gradoId,
            },
        });
    };

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        dispatch({
            type: "CERRAR_SESION",
        });
    };

    return (
        <AuthContext.Provider value={{
            usu_id: state.usu_id,
            usu_nombre: state.usu_nombre,
            usu_apellido_pat: state.usu_apellido_pat,
            usu_apellido_mat: state.usu_apellido_mat,
            usu_email: state.usu_email,
            usu_nacimiento: state.usu_nacimiento,
            usu_sexo: state.usu_sexo,
            usu_dni: state.usu_dni,
            usu_telefono: state.usu_telefono,
            usu_foto: state.usu_foto,
            usu_tipo: state.usu_tipo,
            usu_direccion: state.usu_direccion,
            usu_estado: state.usu_estado,
            grado_id: state.grado_id,
            autenticado: state.autenticado,
            token: state.token,
            cargando: state.cargando,
            iniciarSesion: iniciarSesion,
            cerrarSesion: cerrarSesion,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
