import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthLoginScreen from './screen/AuthLoginScreen';

const AuthRouter = () => {
    return (
        <Switch>
            <Route path={"/auth"} component={AuthLoginScreen} />
        </Switch>
    )
}

export default AuthRouter;
