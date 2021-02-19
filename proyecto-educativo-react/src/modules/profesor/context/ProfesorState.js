import React, { useReducer } from 'react';
import ProfesorContext from './ProfesorContext';
import ProfesorReducer from './ProfesorReducer';

const ProfesorState = (props) => {

    const [state, dispatch] = useReducer(ProfesorReducer, {
        usu_id: null
    });

    return (
        <ProfesorContext.Provider value={{
            usu_id: state.usu_id
        }}>
            {props.children}
        </ProfesorContext.Provider>
    )
}

export default ProfesorState;
