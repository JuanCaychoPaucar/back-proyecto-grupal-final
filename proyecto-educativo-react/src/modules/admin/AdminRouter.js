import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import RutaPrivada from '../../RutaPrivada';
import AdminHeader from './components/AdminHeader';
import AdminDashboardScreen from './screens/dashboard/AdminDashboardScreen';
import AdminUsuarioRegistroScreen from './screens/usuario/AdminUsuarioRegistroScreen';
import AdminUsuarioListadoScreen from './screens/usuario/AdminUsuarioListadoScreen';

import AuthContext from '../auth/context/AuthContext';
import AdminState from '../admin/context/AdminState';

const AdminRouter = () => {

    const { usu_tipo } = useContext(AuthContext)


    return (
        <AdminState>
            {
                usu_tipo !== "admin" ?
                    <h1 className="display-4">Cargando...</h1> :
                    <>
                        <AdminHeader />
                        <main className="container pt-5">
                            <Switch>
                                <RutaPrivada path={"/admin/usuario/registro"} componente={AdminUsuarioRegistroScreen} />
                                <RutaPrivada path={"/admin/usuario/listado"} componente={AdminUsuarioListadoScreen} />
                                <RutaPrivada path={"/admin"} componente={AdminDashboardScreen} />  {/* la ruta mas general va abajo */}
                            </Switch>
                        </main>
                    </>
            }
        </AdminState>

        // usu_tipo !== "admin" ?
        //     <h1 className="display-4">Cargando...</h1> :
        //     <>
        //         <AdminHeader />
        //         <main className="container pt-5">
        //             <Switch>
        //                 <RutaPrivada path={"/admin/usuario/registro"} componente={AdminUsuarioRegistroScreen} />
        //                 <RutaPrivada path={"/admin/usuario/listado"} componente={AdminUsuarioListadoScreen} />
        //                 <RutaPrivada path={"/admin"} componente={AdminDashboardScreen} />  {/* la ruta mas general va abajo */}
        //             </Switch>
        //         </main>
        //     </>
    )
}

export default AdminRouter;

// <>
        //     <AdminHeader />

        // <main className="container pt-5">
        //     <Switch>
        //         <RutaPrivada path={"/admin"} componente={AdminDashboardScreen} />  {/* la ruta mas general va abajo */}
        //     </Switch>
        // </main>

        // </>
