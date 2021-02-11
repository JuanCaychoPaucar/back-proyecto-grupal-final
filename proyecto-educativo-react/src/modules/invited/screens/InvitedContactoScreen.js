import React from 'react';
import InvitedContactoFormulario from '../components/InvitedContactoFormulario';
import InvitedFooter from '../components/InvitedFooter';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';

const texto = {
    titulo: "Ponerse en contacto",
    parrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna.",
};

const InvitedContactoScreen = () => {
    return (
        <>
            <InvitedHeader />
            <main>
                <InvitedHomeSeccionPrincipal texto={texto} />

                <InvitedContactoFormulario />
            </main>
            <InvitedFooter />
        </>
    )
}

export default InvitedContactoScreen;
