import React from 'react';

const InvitedHomeSeccionTarjetasItem = ({ item }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className={`block-v1 ${item.color} aos-init aos-animate`} data-aos="fade-up" data-aos-delay={item.delay}>
                <div className="tarjeta-container">
                    <img className="tarjeta-item" src={item.imagen} alt="" />
                </div>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
            </div>
        </div>
    )
}

export default InvitedHomeSeccionTarjetasItem;
