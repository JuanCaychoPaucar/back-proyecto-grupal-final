import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InvitedHomeScreen from './screens/InvitedHomeScreen';

const InvitedRouter = () => {
    return (
        <Switch>
            <Route path={"/"} exact component={InvitedHomeScreen} />
        </Switch>
    )
}

export default InvitedRouter;
