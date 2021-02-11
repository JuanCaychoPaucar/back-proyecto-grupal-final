import React from 'react';
import InvitedHomeSeccionTarjetasItem from './InvitedHomeSeccionTarjetasItem';

import teach from "./../../../assets/img/teach.svg";
import children from "./../../../assets/img/children-on-see-saw.svg";
import friends from "./../../../assets/img/friends.svg";


const data = [
    {
        id: 1,
        imagen: teach,
        color: "color-1",
        delay: "0",
        titulo: "Aprender",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna."
    },

    {
        id: 2,
        imagen: children,
        color: "color-2",
        delay: "100",
        titulo: "Jugar",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna."
    },

    {
        id: 3,
        imagen: friends,
        color: "color-3",
        delay: "200",
        titulo: "Socializar",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna."
    }
];


const InvitedHomeSeccionTarjetas = () => {

    return (

        <div className="untree_co-section py-0">
            <div className="container">
                <div className="row">
                    {
                        data.map(item => {
                            return <InvitedHomeSeccionTarjetasItem key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default InvitedHomeSeccionTarjetas;
