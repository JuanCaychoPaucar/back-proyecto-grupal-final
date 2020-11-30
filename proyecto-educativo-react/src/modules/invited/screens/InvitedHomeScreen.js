import React from 'react';

import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionOfertaEducativa from '../components/InvitedHomeSeccionOfertaEducativa';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';
import InvitedHomeSeccionTarjetas from '../components/InvitedHomeSeccionTarjetas';
import InvitedHomeSeccionSecundaria from '../components/InvitedHomeSeccionSecundaria';
import InvitedHomeSeccionNosotros from '../components/InvitedHomeSeccionNosotros';
import InvitedHomeSeccionPension from '../components/InvitedHomeSeccionPension';
import InvitedFooter from '../components/InvitedFooter';


const InvitedHomeScreen = () => {

    return (
        <>
            <InvitedHeader />

            <main>
                <InvitedHomeSeccionPrincipal />

                <InvitedHomeSeccionTarjetas />

                <InvitedHomeSeccionOfertaEducativa />

                <InvitedHomeSeccionSecundaria />

                <InvitedHomeSeccionNosotros />

                <InvitedHomeSeccionPension />
            </main>

            <InvitedFooter />
        </>
    )
}

export default InvitedHomeScreen;