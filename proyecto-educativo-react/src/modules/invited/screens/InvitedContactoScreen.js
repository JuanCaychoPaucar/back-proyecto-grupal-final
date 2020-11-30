import React from 'react';
import InvitedContactoFormulario from '../components/InvitedContactoFormulario';
import InvitedFooter from '../components/InvitedFooter';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';

const texto = {
    titulo: "Ponerse en contacto",
    parrafo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
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
