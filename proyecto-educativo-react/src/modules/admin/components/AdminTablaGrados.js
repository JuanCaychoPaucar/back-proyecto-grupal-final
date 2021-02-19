import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';

import AdminContext from '../context/AdminContext';

const AdminTablaGrados = ({ grados, modo, setModo, setFormulario }) => {

    const { cargandoSpinner } = useContext(AdminContext);

    return (
        <div className="row mt-4">

            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nivel</th>
                            <th>Numero</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargandoSpinner ?
                            <tr>
                                <td colSpan="6">
                                    <Spinner animation="grow" variant="secondary" />
                                </td>
                            </tr>
                            :
                            grados.map((gra) => (
                                <tr key={gra.grado_id}>
                                    <td className="align-middle">{gra.grado_id}</td>
                                    <td className="align-middle">{gra.grado_nivel}</td>
                                    <td className="align-middle">{gra.grado_numero}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary mr-3"
                                            onClick={() => {
                                                setFormulario({ ...gra });
                                                setModo("editar");
                                            }}
                                        >
                                            Editar</button>
                                        {/* <button className="btn btn-danger">Eliminar</button> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminTablaGrados;
