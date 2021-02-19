import React, { useContext, useEffect, useState } from 'react';
import { getUsuariosByTipo } from '../../../../services/adminServices';
import AdminTablaUsuarios from '../../components/AdminTablaUsuarios';
import AdminContext from '../../context/AdminContext';

const AdminUsuarioListadoScreen = () => {
    const { usu_tipo, usuarios, cargandoUsuario, setearCargandoUsuario, setearTipo, setearUsuarios, usuariosListarPorTipo, grados, gradosListarAll } = useContext(AdminContext);

    const seleccionTipo = (e) => {
        let valor = e.target.value;
        setearTipo(valor);
        if (valor === "alumno") {
            gradosListarAll();
            console.log("consulta grados", grados);
        }
        setearCargandoUsuario(true);
        usuariosListarPorTipo(valor);
    }

    useEffect(() => {
        setearUsuarios([]);
    }, [])

    return (
        <>
            <h5 className="text-center">
                LISTADO USUARIOS
            </h5>
            <form className="">
                <div className="form-group">
                    <label className="mr-2" htmlFor="">Tipo</label>
                    <select name="" id="" onChange={seleccionTipo}>
                        <option value="">Seleccione tipo</option>
                        <option value="admin">Administrador</option>
                        <option value="profe">Profesor</option>
                        <option value="alumno">Alumno</option>
                    </select>
                </div>
            </form>
            <AdminTablaUsuarios usuarios={usuarios} />
        </>
    )
}

export default AdminUsuarioListadoScreen;
