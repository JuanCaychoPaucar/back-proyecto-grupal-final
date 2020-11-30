import React from 'react';

import imagen_1 from "./../../../assets/img/img_1.jpg";
import imagen_2 from "./../../../assets/img/img_2.jpg";
import imagen_3 from "./../../../assets/img/img_3.jpg";
import imagen_4 from "./../../../assets/img/img_4.jpg";
import imagen_5 from "./../../../assets/img/img_5.jpg";
import imagen_6 from "./../../../assets/img/img_6.jpg";
import imagen_7 from "./../../../assets/img/img_7.jpg";
import imagen_8 from "./../../../assets/img/img_8.jpg";
import imagen_9 from "./../../../assets/img/img_9.jpg";
import imagen_10 from "./../../../assets/img/img_10.jpg";
import InvitedGaleriaSeccionFotosContenedor from './InvitedGaleriaSeccionFotosContenedor';

const imagenes1 = [
    {
        id: 1,
        imagen: imagen_1,
        delay: 0,
        enlace: "!#",
    },

    {
        id: 2,
        imagen: imagen_2,
        delay: 100,
        enlace: "!#",
    },

    {
        id: 3,
        imagen: imagen_3,
        delay: 200,
        enlace: "!#",
    }
];

const imagenes2 = [
    {
        id: 4,
        imagen: imagen_4,
        delay: 0,
        enlace: "!#",
    },

    {
        id: 5,
        imagen: imagen_5,
        delay: 100,
        enlace: "!#",
    },

    {
        id: 8,
        imagen: imagen_8,
        delay: 200,
        enlace: "!#",
    }
];

const imagenes3 = [
    {
        id: 9,
        imagen: imagen_9,
        delay: 0,
        enlace: "!#",
    },

    {
        id: 6,
        imagen: imagen_6,
        delay: 100,
        enlace: "!#",
    },

    {
        id: 7,
        imagen: imagen_7,
        delay: 200,
        enlace: "!#",
    },

    {
        id: 10,
        imagen: imagen_10,
        delay: 0,
        enlace: "!#",
    }
];

const InvitedGaleriaSeccionFotos = () => {

    return (
        <div className="untree_co-section">
            <div className="container">
                <div className="row">
                    <InvitedGaleriaSeccionFotosContenedor imagenes={imagenes1} />
                    <InvitedGaleriaSeccionFotosContenedor imagenes={imagenes2} />
                    <InvitedGaleriaSeccionFotosContenedor imagenes={imagenes3} />
                </div>
            </div>
        </div>
    )
}

export default InvitedGaleriaSeccionFotos;
