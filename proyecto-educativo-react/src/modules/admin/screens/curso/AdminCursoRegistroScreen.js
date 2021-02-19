import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../auth/context/AuthContext';
import AdminContext from '../../context/AdminContext';
import Swal from "sweetalert2";

import { postRegistrarCurso } from '../../../../services/adminServices';
import imagenCarga from '../../../../assets/img/spinner_book.gif';

const formularioVacio = {
    curso_id: "",
    curso_nombre: "",
    curso_descripcion: "",
    curso_horaini: 0,
    curso_horafin: 0,
    curso_aforo: 0,
    grado_id: "",
    usuario_id: ""
};

const AdminCursoRegistroScreen = () => {

    const { token } = useContext(AuthContext);
    const { cargandoUsuario, setearCargandoUsuario, usuarios, grados, usuariosListarPorTipo, gradosListarAll } = useContext(AdminContext);

    const [formulario, setFormulario] = useState(formularioVacio);

    const validarFormulario = () => {
        if (
            formulario.curso_nombre.trim() === "" ||
            formulario.curso_descripcion.trim() === "" ||
            formulario.curso_horaini <= 0 ||
            formulario.curso_horaini > 23 ||
            formulario.curso_horafin <= 0 ||
            formulario.curso_horafin > 23 ||
            formulario.curso_aforo <= 0 ||
            formulario.grado_id.trim() === "" ||
            formulario.usuario_id.trim() === ""
        ) {
            Swal.fire({
                title: "Campos incompletos!",
                text: "Los campos requeridos no pueden estar vacios o contener numeros menores a 0",
                icon: "warning"
            });
            return false;
        } else {
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
            setearCargandoUsuario(true);
            // console.log("TODO CORRECTO");
            postRegistrarCurso(formulario, token).then((rpta) => {
                // console.log("creacion curso", rpta);
                if (rpta.ok) {
                    // console.log("creacion curso rpta ok");
                    setFormulario(formularioVacio);
                    setearCargandoUsuario(false);
                    Swal.fire({
                        title: "Registro creado!",
                        text: "El curso se ha registrado exitosamente",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            })
        } else {
            Swal.fire({
                title: "Error!",
                text: "Hubo un error al registrar el curso",
                icon: "error"
            });
        }

    };


    useEffect(() => {
        usuariosListarPorTipo("profe");
        gradosListarAll();
    }, [])




    return (
        <>
            <h5 className="text-center">
                REGISTRO CURSOS
            </h5>


            <form onSubmit={handleSubmit}>
                {
                    cargandoUsuario ?
                        <div className="cargando">
                            <figure>
                                <img className="imagen-carga" src={imagenCarga} alt="" />
                            </figure>
                        </div>
                        :
                        ""
                }

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label htmlFor="">Nombre <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese nombre"
                            name="curso_nombre"
                            value={formulario.curso_nombre}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group col-md-2 col-sm-6">
                        <label htmlFor="">Hora inicio <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="number"
                            className="form-control"
                            name="curso_horaini"
                            value={formulario.curso_horaini}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group col-md-2 col-sm-6">
                        <label htmlFor="">Hora fin <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="number"
                            className="form-control"
                            name="curso_horafin"
                            value={formulario.curso_horafin}
                            onChange={handleChange}
                        />
                    </div>

                </div>


                <div className="form-group">
                    <label htmlFor="">Descripcion <span className="text-danger font-weight-bold">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese descripcion"
                        name="curso_descripcion"
                        value={formulario.curso_descripcion}
                        onChange={handleChange}
                    />
                </div>


                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="">Profesor <span className="text-danger font-weight-bold">*</span></label>
                        <select
                            className="form-control"
                            name="usuario_id"
                            value={formulario.usuario_id}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione profesor</option>
                            {
                                usuarios.map((usu) => (
                                    <option
                                        key={usu.usuario_id}
                                        value={usu.usuario_id}
                                    >
                                        {usu.usuario_id + " - " + usu.usuario_apep + " " + usu.usuario_apem + ", " + usu.usuario_nombre}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group col-md-5">
                        <label htmlFor="">Grado <span className="text-danger font-weight-bold">*</span></label>
                        <select
                            className="form-control"
                            name="grado_id"
                            value={formulario.grado_id}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione grado</option>
                            {
                                grados.map((gra) => (
                                    <option
                                        key={gra.grado_id}
                                        value={gra.grado_id}
                                    >
                                        {gra.grado_id + " - " + gra.grado_nivel + " - " + gra.grado_numero}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="">Aforo <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="number"
                            className="form-control"
                            name="curso_aforo"
                            value={formulario.curso_aforo}
                            onChange={handleChange}
                        />
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-block btn-primary"
                            type="submit"
                        >
                            Registrar curso
                        </button>
                    </div>
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-block btn-danger"
                            type="reset"
                        >
                            Cancelar
                    </button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default AdminCursoRegistroScreen;
