import React from 'react';
import InvitedHomeSeccionOfertaEducativaItem from './InvitedHomeSeccionOfertaEducativaItem';

import nota_musical from "./../../../assets/img/musical-note.svg";
import matematicas from "./../../../assets/img/mathematics.svg";
import libro_abierto from "./../../../assets/img/open-book.svg";
import libro_cerrado from "./../../../assets/img/book.svg";
import historia from "./../../../assets/img/history.svg";
import preguntas from "./../../../assets/img/questions.svg";

const data = [
    {
        id: 1,
        imagen: nota_musical,
        color: { background: "var(--verde-6)", border: "1px solid var(--verde-4)" },
        delay: "100",
        titulo: "Clases de Musica",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },

    {
        id: 2,
        imagen: matematicas,
        color: { background: "var(--naranja-3)", border: "1px solid var(--naranja-1)" },
        delay: "200",
        titulo: "Clases de Matemática",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },

    {
        id: 3,
        imagen: libro_abierto,
        color: { background: "var(--celeste-2)", border: "1px solid var(--celeste-1)" },
        delay: "300",
        titulo: "Clases de Inglés",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },

    {
        id: 4,
        imagen: libro_cerrado,
        color: { background: "var(--violeta-2)", border: "1px solid var(--violeta-1)" },
        delay: "100",
        titulo: "Comprensión Lectora",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },

    {
        id: 5,
        imagen: historia,
        color: { background: "var(--verde-7)", border: "1px solid var(--verde-2)" },
        delay: "200",
        titulo: "Clases de Historia",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },

    {
        id: 6,
        imagen: preguntas,
        color: { background: "var(--naranja-4)", border: "1px solid var(--naranja-2)" },
        delay: "300",
        titulo: "Clases Activas",
        texto: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    }
];


const InvitedHomeSeccionOfertaEducativa = () => {
    return (
        <div className="untree_co-section">
            <div className="container">

                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                        <h2 className="line-bottom text-center mb-4">Nuestra Oferta Educativa</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>

                {/* INICIO CONTENEDOR CARDS */}
                <div className="row">
                    {
                        data.map(item => {
                            return <InvitedHomeSeccionOfertaEducativaItem key={item.id} item={item} />
                        })
                    }

                </div>
                {/* FIN CONTENEDOR CARDS */}
            </div>
        </div>
    )
}

export default InvitedHomeSeccionOfertaEducativa
