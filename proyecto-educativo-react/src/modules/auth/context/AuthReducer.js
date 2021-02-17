const AuthReducer = (stateActual, action) => {

    switch (action.type) {
        case "INICIAR_SESION":
            return {
                ...stateActual,
                usu_id : action.data.usu_id,
                usu_nombre : action.data.usu_nombre,
                usu_apellido_pat: action.data.usu_apellido_pat,
                usu_apellido_mat: action.data.usu_apellido_mat,
                usu_email : action.data.usu_email,
                usu_nacimiento : action.data.usu_nacimiento,
                usu_sexo : action.data.usu_sexo,
                usu_dni : action.data.usu_dni,
                usu_telefono : action.data.usu_telefono,
                usu_foto : action.data.usu_foto,
                usu_tipo : action.data.usu_tipo,
                usu_direccion : action.data.usu_direccion,
                usu_estado : action.data.usu_estado,
                token: action.data.token,
                autenticado: true,
                cargando: false,
            }

        case "CERRAR_SESION":
            return {
                ...stateActual,
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
                token: null,
                autenticado: false,
                cargando: false,
            }

        default:
            console.log("Seleccion incorrecta");
    }
};

export default AuthReducer;