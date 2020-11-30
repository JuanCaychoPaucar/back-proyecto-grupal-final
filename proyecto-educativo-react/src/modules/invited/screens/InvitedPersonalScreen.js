import React from 'react';
import InvitedFooter from '../components/InvitedFooter';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';
import InvitedPersonalSeccionDocentes from '../components/InvitedPersonalSeccionDocentes';

const texto = {
    titulo: "Nuestro Personal",
    parrafo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
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
