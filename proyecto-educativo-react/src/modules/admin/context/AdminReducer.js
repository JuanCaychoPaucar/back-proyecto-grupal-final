const AdminReducer = (stateActual, action) => {

    switch (action.type) {
        case "SETEAR_TIPO":
            return {
                ...stateActual,
                usu_tipo: action.data.usu_tipo,
            }

        case "SETEAR_ID_USUARIO":
            return {
                ...stateActual,
                usu_id: action.data.usu_id,
            }

        case "SETEAR_USUARIOS":
            return {
                ...stateActual,
                usuarios: action.data.usuarios,
            }

        case "SETEAR_CARGANDO_MODAL":
            return {
                ...stateActual,
                cargandoModal: action.data.cargandoModal,
            }

        case "SETEAR_CARGANDO_USUARIO":
            return {
                ...stateActual,
                cargandoUsuario: action.data.cargandoUsuario,
            }

        default:
            console.log("Seleccion incorrecta");
    }
};

export default AdminReducer;