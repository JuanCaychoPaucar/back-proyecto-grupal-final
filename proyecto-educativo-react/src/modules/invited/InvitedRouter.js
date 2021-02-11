import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InvitedContactoScreen from './screens/InvitedContactoScreen';
import InvitedGaleriaScreen from './screens/InvitedGaleriaScreen';
import InvitedHomeScreen from './screens/InvitedHomeScreen';
import InvitedNosotrosScreen from './screens/InvitedNosotrosScreen';
import InvitedPersonalScreen from './screens/InvitedPersonalScreen';

const InvitedRouter = () => {

    return (
        <Switch>
            <Route path={"/galeria"} component={InvitedGaleriaScreen} />
            <Route path={"/contacto"} component={InvitedContactoScreen} />
            <Route path={"/nosotros"} component={InvitedNosotrosScreen} />
            <Route path={"/personal"} component={InvitedPersonalScreen} />
            <Route path={"/"} exact component={InvitedHomeScreen} />
        </Switch>
    )
}

export default InvitedRouter;
