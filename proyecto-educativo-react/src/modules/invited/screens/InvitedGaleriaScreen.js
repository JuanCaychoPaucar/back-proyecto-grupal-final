import React from 'react';
import InvitedFooter from '../components/InvitedFooter';
import InvitedGaleriaSeccionFotos from '../components/InvitedGaleriaSeccionFotos';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';

const texto = {
    titulo: "Nuestra Galeria",
    parrafo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
};

const InvitedGaleriaScreen = () => {
    return (
        <>
            <InvitedHeader />
            <main>
                <InvitedHomeSeccionPrincipal texto={texto} />

                <InvitedGaleriaSeccionFotos />
            </main>
            <InvitedFooter />
        </>
    )
}

export default InvitedGaleriaScreen;
