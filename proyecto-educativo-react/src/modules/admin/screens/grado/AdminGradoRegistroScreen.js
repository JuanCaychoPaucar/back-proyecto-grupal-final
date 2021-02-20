import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../auth/context/AuthContext';
import AdminContext from '../../context/AdminContext';
import AdminTablaGrados from '../../components/AdminTablaGrados';

import Swal from "sweetalert2";

import { postGrado, putGrado } from '../../../../services/adminServices';
import imagenCarga from '../../../../assets/img/spinner_book.gif';

const formularioVacio = {
    grado_id: null,
    grado_nivel: "",
    grado_numero: ""
};


const AdminGradoRegistroScreen = () => {
    const { token } = useContext(AuthContext);
    const { cargandoGrado, setearCargandoGrado, grados, gradosListarAll } = useContext(AdminContext);
    const [modo, setModo] = useState("crear");
    const [formulario, setFormulario] = useState(formularioVacio);

    const validarFormulario = () => {
        if (
            formulario.grado_nivel.trim() === "" ||
            formulario.grado_numero.trim() === ""

        ) {
            // console.log("COMPLETAR LOS CAMPOS OBLIGATORIOS");
            Swal.fire({
                title: "Campos incompletos!",
                text: "Los campos requeridos no pueden estar vacios",
                icon: "warning"
            });
            return false;
        } else {
            // console.log("ya");
            return true;
        }
    };



    const handleChange = (e) => {
        let valor = e.target.value;

        setFormulario({
            ...formulario,
            [e.target.name]: valor,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        let validacion = validarFormulario();

        if (validacion) {

            if (modo === "crear") {
                setearCargandoGrado(true);
                postGrado(formulario, token).then((rpta) => {
                    // console.log("RESPUESTA GRADO", rpta);
                    if (rpta.ok) {
                        setearCargandoGrado(false);
                        setFormulario(formularioVacio);
                        gradosListarAll();
                        Swal.fire({
                            title: "Registro creado!",
                            text: "El grado se ha registrado exitosamente",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    }
                });
            } else {
                // EDICION
                Swal.fire({
                    title: "¿Editar?",
                    text: "¿Seguro que desea editar el registro del grado?",
                    icon: "question",
                    showCancelButton: true,
                }).then(({ isConfirmed }) => {
                    if (isConfirmed) {
                        setearCargandoGrado(true);
                        putGrado(formulario, token).then((rpta) => {
                            // console.log("actualizado grado", rpta);
                            if (rpta.ok) {
                                setearCargandoGrado(false);
                                setModo("crear");
                                setFormulario(formularioVacio);
                                gradosListarAll();
                                Swal.fire({
                                    title: "Registro actualizado!",
                                    text: "El grado se ha actualizado exitosamente",
                                    icon: "success",
                                    timer: 1500,
                                    showConfirmButton: false,
                                });
                            }
                        })
                    }
                })
            }

        }
    };

    useEffect(() => {
        gradosListarAll();
    }, []);


    return (
        <>
            <h5 className="text-center">
                REGISTRO GRADOS
            </h5>

            <form onSubmit={handleSubmit}>
                {
                    cargandoGrado ?
                        <div className="cargando">
                            <figure>
                                <img className="imagen-carga" src={imagenCarga} alt="" />
                            </figure>
                        </div>
                        :
                        ""
                }

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Nivel <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese nivel"
                            name="grado_nivel"
                            value={formulario.grado_nivel}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Numero <span className="text-danger font-weight-bold">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese numero"
                                name="grado_numero"
                                value={formulario.grado_numero}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>




                {/* <div className="form-group">
                    <img src={vista} alt="" style={{ width: "200px" }} />
                </div> */}

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-block btn-primary"
                            type="submit"
                        >
                            {modo === "crear" ? "Registrar grado" : "Actualizar grado"}
                        </button>
                    </div>
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-block btn-danger"
                            type="button"
                            onClick={() => {
                                setFormulario(formularioVacio);
                                setModo("crear");
                            }}
                        >
                            Cancelar
                    </button>
                    </div>
                </div>

            </form>

            {/* LISTADO GRADOS */}
            <h5 className="text-center mt-5">
                LISTADO GRADOS
            </h5>
            <AdminTablaGrados grados={grados} modo={modo} setModo={setModo} setFormulario={setFormulario} />
        </>
    )
}

export default AdminGradoRegistroScreen;
