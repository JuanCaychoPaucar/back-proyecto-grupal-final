import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import InvitedRouter from './modules/invited/InvitedRouter';

import AdminState from './modules/admin/context/AdminState';
import InvitedState from './modules/invited/context/InvitedState';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/auth"} component={AuthRouter} />
                
                {/* <AdminState> */}
                    <Route path={"/admin"} component={AdminRouter} />
                {/* </AdminState> */}

                <InvitedState>
                    <Route path={"/"} component={InvitedRouter} />
                </InvitedState>
            </Switch>
        </Router>
    )
}

export default AppRouter;
