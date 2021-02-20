import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import RutaPrivada from '../../RutaPrivada';
import ProfesorHeader from './components/ProfesorHeader';
import ProfesorDashboardScreen from './screens/dashboard/ProfesorDashboardScreen';
import ProfesorCursoListado from './screens/curso/ProfesorCursoListado';
import ProfesorCursoAlumnos from './screens/curso/ProfesorCursoAlumnos';

import AuthContext from '../auth/context/AuthContext';
import ProfesorState from '../profesor/context/ProfesorState';

const ProfesorRouter = () => {

    const { usu_tipo, token } = useContext(AuthContext);

    return (
        <ProfesorState>
            {
                token === null ? <Redirect to={"/"} /> :
                    usu_tipo !== "profe" ?
                        <h1 className="display-4">Cargando...</h1> :
                        <>
                            <ProfesorHeader />
                            <main className="container pt-5">
                                <Switch>
                                    <RutaPrivada path={"/profesor/curso/alumnos/:cursoId"} componente={ProfesorCursoAlumnos} />
                                    <RutaPrivada path={"/profesor/curso"} componente={ProfesorCursoListado} />
                                    <RutaPrivada path={"/profesor"} componente={ProfesorDashboardScreen} />  {/* la ruta mas general va abajo */}
                                </Switch>
                            </main>
                        </>
            }
        </ProfesorState>
    )
}

export default ProfesorRouter;
