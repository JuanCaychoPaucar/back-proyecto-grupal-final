import React, { useReducer } from 'react';
import AlumnoContext from './AlumnoContext';
import AlumnoReducer from './AlumnoReducer';

const AlumnoState = (props) => {

    const [state, dispatch] = useReducer(AlumnoReducer, {
        usu_id: null
    });

    return (
        <AlumnoContext.Provider value={{
            usu_id: state.usu_id
        }}>
            {props.children}
        </AlumnoContext.Provider>
    )
}

export default AlumnoState;