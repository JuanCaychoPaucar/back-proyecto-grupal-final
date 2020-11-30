import React from 'react';

import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionOfertaEducativa from '../components/InvitedHomeSeccionOfertaEducativa';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';
import InvitedHomeSeccionTarjetas from '../components/InvitedHomeSeccionTarjetas';
import InvitedHomeSeccionSecundaria from '../components/InvitedHomeSeccionSecundaria';
import InvitedHomeSeccionNosotros from '../components/InvitedHomeSeccionNosotros';
import InvitedHomeSeccionPension from '../components/InvitedHomeSeccionPension';
import InvitedFooter from '../components/InvitedFooter';

const texto = {
    titulo: "Centro de Aprendizaje para sus Hijos",
    parrafo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
};


const InvitedHomeScreen = () => {

    return (
        <>
            <InvitedHeader />

            <main>
                <InvitedHomeSeccionPrincipal texto={texto} />

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