import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../auth/context/AuthContext';
import AdminContext from '../../context/AdminContext';
import Swal from "sweetalert2";

import AdminTablaCursos from '../../components/AdminTablaCursos';

import imagenCarga from '../../../../assets/img/spinner_book.gif';

const formularioVacio = {
    curso_id: ""
};

const AdminCursoListadoScreen = () => {

    const { token } = useContext(AuthContext);
    const { seleccionListadoCursos, setearSeleccionListadoCursos, cursos, cursosListarAll, cursosListarById, setearCursos } = useContext(AdminContext);

    const [formulario, setFormulario] = useState(formularioVacio);

    const validarFormulario = () => {
        // console.log("valor del ID", formulario.curso_id);
        if (+formulario.curso_id > 0) {
            return true;
        } else {
            Swal.fire({
                title: "Error de ingreso!",
                text: "El campo ID debe ser un numero mayor a 0",
                icon: "warning"
            });
        }
    }


    const seleccionTipoListado = (e) => {
        let valor = e.target.value;

        if (valor === "mostrarTodos") {
            setearSeleccionListadoCursos(valor);
            cursosListarAll();
            // console.log("listar todos los cursos", cursos);
        } if (valor === "mostrarId") {
            setearSeleccionListadoCursos(valor);
            setearCursos([]);
            // console.log("listado por ID");
        } if (valor === "") {
            setearSeleccionListadoCursos(valor);
            setearCursos([]);
        }
    };


    const handleChange = (e) => {
        let valor = e.target.value;
        // console.log("target name", e.target.name);

        setFormulario({
            ...formulario,
            [e.target.name]: valor,
        });
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        let validacion = validarFormulario();
        if (validacion) {
            // console.log("HOLA BOTON LISTAR", typeof +formulario.curso_id);
            cursosListarById(formulario.curso_id);
            // console.log("CURSOS POR ID", cursos);
        }

    };


    useEffect(() => {
        setearCursos([]);
    }, [])

    return (
        <>
            <h5 className="text-center mb-3">
                LISTADO CURSOS
            </h5>

            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="row col-md-7">
                        <label className="col-md-3 col-form-label">Listado</label>
                        <div className="col-md-9">
                            <select className="form-control" name="" id="" onChange={seleccionTipoListado}>
                                <option value="">Seleccione tipo de listado</option>
                                <option value="mostrarTodos">Mostrar todos</option>
                                <option value="mostrarId">Mostrar por ID</option>
                            </select>
                        </div>
                    </div>

                    <div className="row col-md-3 mb-3" hidden={seleccionListadoCursos === "mostrarId" ? false : true}>
                        <label className="col-md-2 col-form-label">ID</label>
                        <div className="col-md-9">
                            <input
                                type="number"
                                className="form-control"
                                name="curso_id"
                                value={formulario.curso_id}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row col-md-2 mt-1" hidden={seleccionListadoCursos === "mostrarId" ? false : true}>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-success btn-block">Listar</button>
                        </div>

                    </div>
                </div>
            </form>


            <AdminTablaCursos cursos={cursos} />
        </>
    )
}

export default AdminCursoListadoScreen;
