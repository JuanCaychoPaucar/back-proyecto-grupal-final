import React from 'react';
import InvitedFooter from '../components/InvitedFooter';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionNosotros from '../components/InvitedHomeSeccionNosotros';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';

const texto = {
    titulo: "Nosotros",
    parrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna.",
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
