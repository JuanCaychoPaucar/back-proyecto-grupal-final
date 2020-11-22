import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import InvitedRouter from './modules/invited/InvitedRouter';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/auth"} component={AuthRouter} />
                <Route path={"/admin"} component={AdminRouter} />
                <Route path={"/"} exact component={InvitedRouter} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
