const AlumnoReducer = (stateActual, action) => {

    switch (action.type) {
        case "SETEAR_ID_CURSO":
            return {
                ...stateActual,
                curso_id: action.data.curso_id,
            }

        case "SETEAR_CURSO_NOMBRE":
            return {
                ...stateActual,
                curso_nombre: action.data.curso_nombre,
            }

        case "SETEAR_CURSOS":
            return {
                ...stateActual,
                cursos: action.data.cursos,
            }

        case "SETEAR_CARGANDO_CURSOS":
            return {
                ...stateActual,
                cargandoCursos: action.data.cargandoCursos,
            }

        case "SETEAR_CARGANDO_MODAL":
            return {
                ...stateActual,
                cargandoModal: action.data.cargandoModal,
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

        default:
            console.log("Seleccion incorrecta");
    }
};

export default AlumnoReducer;