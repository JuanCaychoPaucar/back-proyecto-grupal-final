const InvitedReducer = (stateActual, action) => {
    switch (action.type) {
        case "CARGAR_INFO_INSTITUCIONAL":
            return {
                // ...stateActual,
                informacion: action.data.informacion,
            }

        default:
            console.log("Seleccion incorrecta");
    }
}

export default InvitedReducer;
