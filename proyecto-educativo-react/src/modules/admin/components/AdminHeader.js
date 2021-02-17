import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AuthContext from '../../auth/context/AuthContext';

const AdminHeader = () => {
    const { usu_nombre, usu_apellido_pat, usu_apellido_mat } = useContext(AuthContext);

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">ADMINISTRADOR</Navbar.Brand>
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

                <NavDropdown title="Grados" id="basic-nav-dropdown">
                    <NavDropdown.Item to="/">Registro</NavDropdown.Item>
                    <NavDropdown.Item>Listado</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Cursos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Registro</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Listado</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Navbar.Text className="mr-5">
                    Bienvenido: <span className="font-weight-bold">{usu_nombre + " " + usu_apellido_pat + " " + usu_apellido_mat}</span>
                </Navbar.Text>

                <Navbar.Text className="mr-2">Cerrar sesion </Navbar.Text>

                <Link
                    className=""
                    to={"/"}
                >
                    <Navbar.Text className="text-danger"><FontAwesomeIcon icon="power-off" /></Navbar.Text>

                </Link>
            </Nav>
        </Navbar>
    )
}

export default AdminHeader;
