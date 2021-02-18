import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../auth/context/AuthContext';
import AdminContext from '../../context/AdminContext';
import Swal from "sweetalert2";

import { getUsuarioById, putUsuario, postSubirImagen } from '../../../../services/adminServices';
import imagenCarga from '../../../../assets/img/spinner_book.gif';

const formularioVacio = {
    usuario_id: null,
    grado_id: null,
    usuario_nombre: "",
    usuario_apep: "",
    usuario_apem: "",
    usuario_fechnac: "",
    usuario_sexo: "",
    usuario_direccion: "",
    usuario_dni: "",
    usuario_email: "",
    usuario_telefono: "",
    usuario_foto: null,
    usuario_estado: false,
    usuario_tipo: ""
};

const AdminUsuarioDetallesScreen = ({ id }) => {
    const { token } = useContext(AuthContext);
    const { setearIdUsuario, setearCargandoModal, cargandoModal, usuariosListarPorTipo, usu_tipo } = useContext(AdminContext);
    const [formulario, setFormulario] = useState(formularioVacio);
    const [imagenSeleccionada, setImagenSeleccionada] = useState([]);
    const [vista, setVista] = useState("");
    const [modo, setModo] = useState("visor");

    const validarFormulario = () => {
        if (
            formulario.usuario_nombre.trim() === "" ||
            formulario.usuario_apep.trim() === "" ||
            formulario.usuario_apem.trim() === "" ||
            formulario.usuario_fechnac.trim() === "" ||
            formulario.usuario_sexo.trim() === "" ||
            formulario.usuario_direccion.trim() === "" ||
            formulario.usuario_dni.trim() === "" ||
            formulario.usuario_email.trim() === "" ||
            formulario.usuario_tipo.trim() === ""
        ) {
            console.log("COMPLETAR LOS CAMPOS OBLIGATORIOS");
            Swal.fire({
                title: "Campos incompletos!",
                text: "Verificar los campos obligatorios",
                icon: "warning"
            });
            return false;
        } else {
            console.log("ya");
            return true;
        }
    }


    const traerUsuario = async () => {
        setearIdUsuario(id);

        let consulta = await getUsuarioById(id);
        if (consulta.ok) {
            let respuesta = consulta.content;
            // console.log("respuesta", respuesta);
            // console.log(respuesta[0].usuario_apem);

            let nuevoFormulario = {
                usuario_id: respuesta[0].usuario_id,
                grado_id: respuesta[0].grado_id,
                usuario_nombre: respuesta[0].usuario_nombre,
                usuario_apep: respuesta[0].usuario_apep,
                usuario_apem: respuesta[0].usuario_apem,
                usuario_fechnac: respuesta[0].usuario_fechnac,
                usuario_sexo: respuesta[0].usuario_sexo,
                usuario_direccion: respuesta[0].usuario_direccion,
                usuario_dni: respuesta[0].usuario_dni,
                usuario_email: respuesta[0].usuario_email,
                usuario_telefono: respuesta[0].usuario_telefono,
                usuario_foto: respuesta[0].usuario_foto,
                usuario_estado: respuesta[0].usuario_estado,
                usuario_tipo: respuesta[0].usuario_tipo
            }

            setFormulario(nuevoFormulario);
            setearCargandoModal(false);

            // console.log("nuevo formulario", formulario);
        }

    }

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

            Swal.fire({
                title: "¿Editar?",
                text: "¿Seguro que desea editar el registro de la mascota?",
                icon: "question",
                showCancelButton: true,
            }).then(({ isConfirmed }) => {
                if (isConfirmed) {
                    setearCargandoModal(true);

                    putUsuario(formulario, token).then((rpta) => {
                        console.log("RESPUESTA", rpta);
                        if (rpta.ok) {

                            if (imagenSeleccionada.length === 0) {
                                Swal.fire({
                                    title: "Registro actualizado!",
                                    text: "El registro se ha actualizado exitosamente",
                                    icon: "success",
                                    timer: 1500,
                                    showConfirmButton: false,
                                });

                            } else {
                                // ACTUALIZAMOS LA IMAGEN
                                const formData = new FormData();
                                formData.append("imagen", imagenSeleccionada);

                                postSubirImagen(formulario.usuario_id, formData, token).then((rpta) => {
                                    // console.log("RESPUESTA SUBIDA IMAGEN", rpta);
                                    if (rpta.ok) {
                                        setearCargandoModal(false);
                                        Swal.fire({
                                            title: "Registro Actualizado!",
                                            text: "El usuario se ha actualizado exitosamente",
                                            icon: "success",
                                            timer: 1500,
                                            showConfirmButton: false,
                                        });
                                    }
                                });
                            }

                            traerUsuario();
                            usuariosListarPorTipo(usu_tipo);
                            setearCargandoModal(false);
                        }
                    });
                }
            });
        }
    };


    const visualizarImagen = (e) => {
        let reader = new FileReader();
        reader.onload = function (e) {
            setVista(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);

    };


    const seleccionarImagen = (e) => {
        let imagen = e.target.files[0];
        if (typeof imagen === "undefined") {
            setImagenSeleccionada([]);
            setVista("");
        } else {
            setImagenSeleccionada(imagen);
            visualizarImagen(e);
        }

        console.log("IMAGEN 1 : ", imagenSeleccionada);
    };


    useEffect(() => {
        traerUsuario();
    }, [])



    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    cargandoModal ?
                        <div className="cargando">
                            <figure>
                                <img className="imagen-carga" src={imagenCarga} alt="" />
                            </figure>
                        </div>
                        :
                        ""
                }

                <div className="form-row">
                    <div className="form-group col-md-4 border border-dark">
                        <figure className="figure-img">
                            <img className="rounded mx-auto my-auto d-block imagen-usuario" src={vista === "" ? formulario.usuario_foto : vista} alt="" />
                        </figure>
                    </div>
                    <div className="form-group col-md-8">
                        <div className="form-group">
                            <label htmlFor="">Nombre <span className="text-danger font-weight-bold">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese nombre"
                                name="usuario_nombre"
                                value={formulario.usuario_nombre}
                                onChange={handleChange}
                                disabled={modo === "visor" ? true : false}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Apellido Paterno <span className="text-danger font-weight-bold">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese apellido Paterno"
                                name="usuario_apep"
                                value={formulario.usuario_apep}
                                onChange={handleChange}
                                disabled={modo === "visor" ? true : false}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Apellido Materno <span className="text-danger font-weight-bold">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese apellido Materno"
                                name="usuario_apem"
                                value={formulario.usuario_apem}
                                onChange={handleChange}
                                disabled={modo === "visor" ? true : false}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">DNI <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese numero DNI"
                            name="usuario_dni"
                            value={formulario.usuario_dni}
                            onChange={handleChange}
                            disabled={modo === "visor" ? true : false}
                        />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="">Sexo <span className="text-danger font-weight-bold">*</span></label>
                        <select
                            className="form-control"
                            name="usuario_sexo"
                            value={formulario.usuario_sexo}
                            onChange={handleChange}
                            disabled={modo === "visor" ? true : false}
                        >
                            <option value="">Seleccione sexo</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Fecha nacimiento <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="date"
                            className="form-control"
                            name="usuario_fechnac"
                            value={formulario.usuario_fechnac}
                            onChange={handleChange}
                            disabled={modo === "visor" ? true : false}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="">Direccion</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Ingrese direccion"
                        name="usuario_direccion"
                        value={formulario.usuario_direccion}
                        onChange={handleChange}
                        disabled={modo === "visor" ? true : false}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese numero telefono"
                            name="usuario_telefono"
                            value={formulario.usuario_telefono}
                            onChange={handleChange}
                            disabled={modo === "visor" ? true : false}
                        />
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="">Email <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Ingrese email"
                            name="usuario_email"
                            value={formulario.usuario_email}
                            onChange={handleChange}
                            disabled={modo === "visor" ? true : false}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputImagen">Imagen</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/png, image/jpeg"
                        onChange={seleccionarImagen}
                        disabled={modo === "visor" ? true : false}
                    />
                </div>

                {/* <div className="form-group">
                    <img src={vista} alt="" style={{ width: "200px" }} />
                </div> */}

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-block btn-primary"
                            type={modo === "editar" ? "button" : "submit"}
                            onClick={() => {
                                if (modo === "visor") {
                                    setModo("editar");
                                } else {
                                    setModo("visor");
                                }
                            }}
                        >
                            {modo === "visor" ? "Editar usuario" : "Guardar Cambios"}
                        </button>
                    </div>
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-block btn-danger"
                            type="button"
                            onClick={() => {
                                traerUsuario();
                                setModo("visor");
                            }}
                        >
                            Cancelar
                    </button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default AdminUsuarioDetallesScreen;
