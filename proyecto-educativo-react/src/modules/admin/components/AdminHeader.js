import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AuthContext from '../../auth/context/AuthContext';

import './AdminHeader.css';

const AdminHeader = () => {
    const { usu_nombre, usu_apellido_pat, usu_apellido_mat, cerrarSesion } = useContext(AuthContext);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link className="font-weight-bold navbar-titulo-header" to={"/admin"}>ADMINISTRADOR</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-header-admin">
                    <Nav className="mr-auto">
                        <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                            <Link
                                className="dropdown-item"
                                to={"/admin/usuario/registro"}
                            >
                                Registro
                    </Link>

                            <Link
                                className="dropdown-item"
                                to={"/admin/usuario/listado"}
                            >
                                Listado
                    </Link>
                        </NavDropdown>

                        <Link
                            className="nav-link"
                            to={"/admin/grado/registro"}
                        >
                            Grados
                </Link>

                        <NavDropdown title="Cursos" id="basic-nav-dropdown">
                            <Link
                                className="dropdown-item"
                                to={"/admin/curso/registro"}
                            >
                                Registro
                    </Link>

                            <Link
                                className="dropdown-item"
                                to={"/admin/curso/listado"}
                            >
                                Listado
                    </Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Navbar.Text className="mr-5">
                            Bienvenido: <span className="font-weight-bold">{usu_nombre + " " + usu_apellido_pat + " " + usu_apellido_mat}</span>
                        </Navbar.Text>

                        <div>
                            <Navbar.Text className="mr-2">
                                Cerrar sesion
                        </Navbar.Text>

                            <Link
                                className=""
                                onClick={cerrarSesion}
                                to={""}
                            >
                                <Navbar.Text className="text-danger"><FontAwesomeIcon icon="power-off" /></Navbar.Text>

                            </Link>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default AdminHeader;
