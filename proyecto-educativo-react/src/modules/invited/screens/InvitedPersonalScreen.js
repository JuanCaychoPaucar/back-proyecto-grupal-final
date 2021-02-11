import React from 'react';
import InvitedFooter from '../components/InvitedFooter';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';
import InvitedPersonalSeccionDocentes from '../components/InvitedPersonalSeccionDocentes';

const texto = {
    titulo: "Nuestro Personal",
    parrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna.",
};

const InvitedPersonalScreen = () => {
    return (
        <>
            <InvitedHeader />
            <main>
                <InvitedHomeSeccionPrincipal texto={texto} />

                <InvitedPersonalSeccionDocentes />
            </main>
            <InvitedFooter />
        </>
    )
}

export default InvitedPersonalScreen;
