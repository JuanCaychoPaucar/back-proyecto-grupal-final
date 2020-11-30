import React from 'react';
import inicial from "./../../../assets/img/inicial.svg";
import primaria from "./../../../assets/img/primaria.svg";
import secundaria from "./../../../assets/img/secundaria.svg";
import InvitedHomeSeccionPensionItem from './InvitedHomeSeccionPensionItem';

const data = [
    {
        id: 1,
        grado: "Inicial",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        pension: 179.99,
        imagen: inicial,
        delay: "100"
    },

    {
        id: 2,
        grado: "Primaria",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        pension: 349.99,
        imagen: primaria,
        delay: "250"
    },

    {
        id: 3,
        grado: "Secundaria",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        pension: 599.99,
        imagen: secundaria,
        delay: "400"
    }
];

const InvitedHomeSeccionPension = () => {
    return (
        <div className="untree_co-section">

            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                        <h2 className="line-bottom text-center mb-4">Pensión</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                </div>

                {/* INICIO TARJETAS PENSION */}
                <div className="row">

                    {
                        data.map(nivel => {
                            return <InvitedHomeSeccionPensionItem key={nivel.id} nivel={nivel} />
                        })
                    }

                </div>
                {/* FIN TARJETAS PENSION */}
            </div>
        </div>
    )
}

export default InvitedHomeSeccionPension;
