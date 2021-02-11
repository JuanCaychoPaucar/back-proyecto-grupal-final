import React, { useContext, useEffect } from 'react';

import InvitedHeader from '../components/InvitedHeader';
import InvitedHomeSeccionOfertaEducativa from '../components/InvitedHomeSeccionOfertaEducativa';
import InvitedHomeSeccionPrincipal from '../components/InvitedHomeSeccionPrincipal';
import InvitedHomeSeccionTarjetas from '../components/InvitedHomeSeccionTarjetas';
import InvitedHomeSeccionSecundaria from '../components/InvitedHomeSeccionSecundaria';
import InvitedHomeSeccionNosotros from '../components/InvitedHomeSeccionNosotros';
import InvitedHomeSeccionPension from '../components/InvitedHomeSeccionPension';
import InvitedFooter from '../components/InvitedFooter';

import InvitedContext from '../context/InvitedContext';

const texto = {
    titulo: "Centro de Aprendizaje para sus Hijos",
    parrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna.",
};

const InvitedHomeScreen = () => {

    const { informacion, cargarInformacionInstitucional } = useContext(InvitedContext);

    const cargaInfo = () => {
        cargarInformacionInstitucional()
    }


    useEffect(() => {
        cargaInfo();
    }, [])

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