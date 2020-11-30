import React from 'react';
import InvitedGaleriaSeccionFotosItem from './InvitedGaleriaSeccionFotosItem';

const InvitedGaleriaSeccionFotosContenedor = ({ imagenes }) => {
    return (
        <div className="col-md-6 col-lg-4 item">
            {
                imagenes.map(img => {
                    return <InvitedGaleriaSeccionFotosItem key={img.id} img={img} />
                })
            }
        </div>
    )
}

export default InvitedGaleriaSeccionFotosContenedor;
