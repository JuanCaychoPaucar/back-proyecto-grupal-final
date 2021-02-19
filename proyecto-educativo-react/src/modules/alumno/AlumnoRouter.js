import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import RutaPrivada from '../../RutaPrivada';
import AlumnoHeader from './components/AlumnoHeader';
import AlumnoDashboardScreen from './screens/dashboard/AlumnoDashboardScreen';
import AlumnoCursoListado from './screens/curso/AlumnoCursoListado';

import AuthContext from '../auth/context/AuthContext';
import AlumnoState from '../alumno/context/AlumnoState';

const AlumnoRouter = () => {

    const { usu_tipo, token } = useContext(AuthContext);

    return (
        <AlumnoState>
            {
                token === null ? <Redirect to={"/"} /> :
                    usu_tipo !== "alumno" ?
                        <h1 className="display-4">Cargando...</h1> :
                        <>
                            <AlumnoHeader />
                            <main className="container pt-5">
                                <Switch>
                                    <RutaPrivada path={"/alumno/curso"} componente={AlumnoCursoListado} />
                                    <RutaPrivada path={"/alumno"} componente={AlumnoDashboardScreen} />  {/* la ruta mas general va abajo */}
                                </Switch>
                            </main>
                        </>
            }
        </AlumnoState>
    )
}

export default AlumnoRouter;
