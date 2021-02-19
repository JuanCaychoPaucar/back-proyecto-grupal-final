const ProfesorReducer = (stateActual, action) => {

    switch (action.type) {
        case "SETEAR_TIPO":
            return {
                ...stateActual,
                usu_tipo: action.data.usu_tipo,
            }

        default:
            console.log("Seleccion incorrecta");
    }
};

export default ProfesorReducer;