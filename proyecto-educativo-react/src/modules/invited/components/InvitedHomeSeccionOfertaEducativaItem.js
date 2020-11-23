import React from 'react';

const InvitedHomeSeccionOfertaEducativaItem = ({ item }) => {
    return (
        <div className="col-6 col-sm-6 col-md-6 col-lg-4 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={item.delay}>
            <div className="feature">
                <div className="mb-4 tarjeta-container-oferta-educativa" style={item.color} >
                    <img className="tarjeta-item-oferta-educativa" src={item.imagen} alt="" />
                </div>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
            </div>
        </div>
    )
}

export default InvitedHomeSeccionOfertaEducativaItem;
