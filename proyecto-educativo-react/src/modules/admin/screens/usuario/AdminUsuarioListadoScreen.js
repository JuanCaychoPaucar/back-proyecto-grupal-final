import React, { useContext, useState } from 'react';
import { getUsuariosByTipo } from '../../../../services/adminServices';
import AdminTablaUsuarios from '../../components/AdminTablaUsuarios';
import AdminContext from '../../context/AdminContext';

const AdminUsuarioListadoScreen = () => {
    const { usu_tipo, usuarios, cargandoUsuario, setearCargandoUsuario, setearTipo, usuariosListarPorTipo } = useContext(AdminContext);

    const seleccionTipo = (e) => {
        let valor = e.target.value;
        setearTipo(valor);
        setearCargandoUsuario(true);
        usuariosListarPorTipo(valor);
    }

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
