import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import InvitedRouter from './modules/invited/InvitedRouter';
import ProfesorRouter from './modules/profesor/ProfesorRouter';
import AlumnoRouter from './modules/alumno/AlumnoRouter';

import InvitedState from './modules/invited/context/InvitedState';
import { FormControl } from 'react-bootstrap';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/auth"} component={AuthRouter} />

                <Route path={"/admin"} component={AdminRouter} />

                <Route path={"/profesor"} component={ProfesorRouter} />

                <Route path={"/alumno"} component={AlumnoRouter} />

                <InvitedState>
                    <Route path={"/"} component={InvitedRouter} />
                </InvitedState>
            </Switch>
        </Router>
    )
}

export default AppRouter;
// Router por HashRouter
