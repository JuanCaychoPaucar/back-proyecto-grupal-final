import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RutaPrivada from '../../RutaPrivada';
import AdminHeader from './components/AdminHeader';
import AdminDashboardScreen from './screens/dashboard/AdminDashboardScreen';

const AdminRouter = () => {
    return (
        <>
            <AdminHeader />

            <main className="container pt-5">
                <Switch>
                    <RutaPrivada path={"/admin"} componente={AdminDashboardScreen} />  {/* la ruta mas general va abajo */}
                </Switch>
            </main>

        </>
    )
}

export default AdminRouter;
