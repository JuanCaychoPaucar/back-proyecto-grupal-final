import React from 'react';
import InvitedFooter from '../components/InvitedFooter';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionNosotros from '../components/InvitedHomeSeccionNosotros';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';

const texto = {
    titulo: "Nosotros",
    parrafo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
};

const InvitedNosotrosScreen = () => {
    return (
        <>
            <InvitedHeader />
            <main>
                <InvitedHomeSeccionPrincipal texto={texto} />

                <InvitedHomeSeccionNosotros />
            </main>
            <InvitedFooter />
        </>
    )
}

export default InvitedNosotrosScreen;
