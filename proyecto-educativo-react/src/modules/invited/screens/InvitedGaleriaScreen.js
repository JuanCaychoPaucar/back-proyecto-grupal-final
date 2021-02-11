import React from 'react';
import InvitedFooter from '../components/InvitedFooter';
import InvitedGaleriaSeccionFotos from '../components/InvitedGaleriaSeccionFotos';
import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';

const texto = {
    titulo: "Nuestra Galeria",
    parrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna.",
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
