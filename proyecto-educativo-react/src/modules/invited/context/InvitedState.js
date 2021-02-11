import React, { useReducer } from 'react';
import InvitedContext from './InvitedContext';
import InvitedReducer from './InvitedReducer';

const InvitedState = (props) => {
    const [state, dispatch] = useReducer(InvitedReducer, {
        informacion: {
            direccion: "",
            correo: "",
            telefono1: "",
            telefono2: "",
            horario: ['', ''],
            redes: {
                instagram: "",
                twitter: "",
                facebook: ""
            }
        }
    })

    const cargarInformacionInstitucional = () => {
        dispatch({
            type: "CARGAR_INFO_INSTITUCIONAL",
            data: {
                informacion: {
                    direccion: "Av. Brasil 666 - Pueblo Libre",
                    correo: "contacto@insbruk.edu.pe",
                    telefono1: "51 1 666 1234",
                    telefono2: "51 1 987 654 321",
                    horario: ['Lunes - Viernes:', '08:00 AM - 04:00 PM'],
                    redes: {
                        instagram: "https://www.google.com.pe",
                        twitter: "https://www.google.com.pe",
                        facebook: "https://www.google.com.pe"
                    }
                }
            }
        });
    }

    return (
        <InvitedContext.Provider value={{
            informacion: state.informacion,
            cargarInformacionInstitucional: cargarInformacionInstitucional,
        }}>
            {props.children}
        </InvitedContext.Provider>
    )
}

export default InvitedState
