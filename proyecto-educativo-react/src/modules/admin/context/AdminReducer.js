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

        case "SETEAR_ID_CURSO":
            return {
                ...stateActual,
                curso_id: action.data.curso_id,
            }

        case "SETEAR_USUARIOS":
            return {
                ...stateActual,
                usuarios: action.data.usuarios,
            }

        case "SETEAR_GRADOS":
            return {
                ...stateActual,
                grados: action.data.grados,
            }

        case "SETEAR_CURSOS":
            return {
                ...stateActual,
                cursos: action.data.cursos,
            }

        case "SETEAR_CURSO_DETALLE":
            return {
                ...stateActual,
                cursoDetalle: action.data.cursoDetalle,
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

        case "SETEAR_CARGANDO_GRADO":
            return {
                ...stateActual,
                cargandoGrado: action.data.cargandoGrado,
            }

        case "SETEAR_CARGANDO_SPINNER":
            return {
                ...stateActual,
                cargandoSpinner: action.data.cargandoSpinner,
            }

        case "SETEAR_SELECCION":
            return {
                ...stateActual,
                seleccion: action.data.seleccion,
            }

        case "SETEAR_SELECCION_LISTADO_CURSOS":
            return {
                ...stateActual,
                seleccionListadoCursos: action.data.seleccionListadoCursos,
            }

        default:
            console.log("Seleccion incorrecta");
    }
};

export default AdminReducer;