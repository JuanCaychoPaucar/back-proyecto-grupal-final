import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../auth/context/AuthContext';
import AdminContext from '../../context/AdminContext';
import Swal from "sweetalert2";

const formularioVacio = {
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
    usuario_tipo: null,
    password: null,
};

const AdminUsuarioRegistroScreen = () => {

    const { token } = useContext(AuthContext);

    const [formulario, setFormulario] = useState(formularioVacio);
    const [imagenSeleccionada, setImagenSeleccionada] = useState([]);

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
            formulario.usuario_tipo.trim() === "" ||
            formulario.password.trim() === ""
        ) {
            console.log("COMPLETAR LOS CAMPOS OBLIGATORIOS");
            return false;
        } else {
            console.log("ya");
            return true;
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
            console.log("HACEMOS EL POST");
        }
    };


    const seleccionarImagen = (e) => {
        const formData = new FormData();
        const imagen = e.target.files[0];
        setImagenSeleccionada(imagen);
        // console.log("IMAGEN : ", imagen);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* {
                    cargandoModal ?
                        <div className="cargando">
                            <figure>
                                <img className="imagen-carga" src={imagenCarga} alt="" />
                            </figure>
                        </div>
                        :
                        ""
                } */}

                <div className="form-row">
                    <div className="form-group col-md-4 border border-dark">
                        <figure className="figure-img">
                            <img className="rounded mx-auto my-auto d-block imagen-usuario" src={formulario.usuario_foto} alt="" />
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
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Sexo <span className="text-danger font-weight-bold">*</span></label>
                        <select
                            className="form-control"
                            name="usuario_sexo"
                            value={formulario.usuario_sexo}
                            onChange={handleChange}
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
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="">Direccion <span className="text-danger font-weight-bold">*</span></label>
                    <input type="text"
                        className="form-control"
                        placeholder="Ingrese direccion"
                        name="usuario_direccion"
                        value={formulario.usuario_direccion}
                        onChange={handleChange}
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
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">Tipo usuario <span className="text-danger font-weight-bold">*</span></label>
                        <select
                            className="form-control"
                            name="usuario_tipo"
                            value={formulario.usuario_tipo}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione tipo</option>
                            <option value="admin">Administrador</option>
                            <option value="profe">Profesor</option>
                            <option value="alumno">Alumno</option>
                        </select>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="">Password <span className="text-danger font-weight-bold">*</span></label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Ingrese password"
                            name="password"
                            value={formulario.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* <div className="form-group">
                    <label htmlFor="inputImagen">Imagen</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/png, image/jpeg"
                        onChange={seleccionarImagen}
                    />
                </div>

                <div className="form-group">
                    <img src="" alt="" style={{ width: "200px" }} />
                </div> */}

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-block btn-primary"
                            type="submit"
                        >
                            Registar usuario
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

export default AdminUsuarioRegistroScreen;
