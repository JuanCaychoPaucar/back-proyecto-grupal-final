import React, { useContext, useEffect, useState } from 'react';
import { getNotasByAlumnoId } from '../../../../services/alumnoServices';
import AuthContext from '../../../auth/context/AuthContext';
import AlumnoContext from '../../context/AlumnoContext';

const formularioVacio = {
    nota: "0",
};

const AlumnoCursoNotas = ({ curso }) => {

    const { usu_id, token } = useContext(AuthContext);
    const { setearCargandoModal, seleccion } = useContext(AlumnoContext);
    const [formulario, setFormulario] = useState(formularioVacio);

    const listarNotas = () => {
        getNotasByAlumnoId(usu_id, token).then((rpta) => {
            console.log("notas del curso");
            if (rpta.ok) {
                console.log("NOTASSS :", rpta);
                console.log("NOTASSS array :", rpta.content[0]);

                let arreglo = rpta.content;
                let nuevoFormulario = ""
                let contador = 0;
                console.log("ARREGLO", arreglo);

                arreglo.map((arre) => {
                    if (seleccion == arre.curso_id) {
                        nuevoFormulario = {
                            nota: arre.notas_calificacion,
                        }
                        setFormulario(nuevoFormulario);
                        contador = contador + 1;
                        return;
                    }
                })

                if (contador === 0) {
                    nuevoFormulario = {
                        nota: "No tiene calificacion",
                    }
                    setFormulario(nuevoFormulario);
                }
            }
        })
    };

    useEffect(() => {
        listarNotas();
        setearCargandoModal(false);
    }, [])


    return (
        <>
            <div className="container">
                <h5 className="text-center mb-3">
                    {curso}
                </h5>

                <div className="d-flex justify-content-around">
                    <form>
                        <div className="row ">

                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control text-center"
                                    name="nota"
                                    value={formulario.nota}
                                    readOnly
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AlumnoCursoNotas;
