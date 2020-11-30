import React from 'react';
import InvitedPersonalSeccionDocentesItem from './InvitedPersonalSeccionDocentesItem';

import staff_1 from "./../../../assets/img/staff_1.jpg";
import staff_2 from "./../../../assets/img/staff_2.jpg";
import staff_3 from "./../../../assets/img/staff_3.jpg";

const docentes = [
    {
        id: 1,
        nombre: "Mina",
        apellido: "Collins",
        curso: "Profesora de matemáticas",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        imagen: staff_1,
        delay: "0",
    },

    {
        id: 2,
        nombre: "Anderson",
        apellido: "Matthew",
        curso: "Profesor de música",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        imagen: staff_2,
        delay: "100",
    },

    {
        id: 3,
        nombre: "Cynthia",
        apellido: "Misso",
        curso: "Profesora de inglés",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        imagen: staff_3,
        delay: "200",
    }
];

const InvitedPersonalSeccionDocentes = () => {
    return (
        <div className="untree_co-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                        <h2 className="line-bottom text-center mb-4">Nuestro Personal</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        docentes.map(docente => {
                            return <InvitedPersonalSeccionDocentesItem key={docente.id} docente={docente} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InvitedPersonalSeccionDocentes;
