import React, { useContext, useEffect, useState } from 'react';
import { postLogin } from '../../../services/authServices';
import AuthContext from '../context/AuthContext';

import "./AuthLoginScreen.css";

const AuthLoginScreen = ({ history }) => {

    // history nos ayuda a navegar por el hisotrial de las paginas

    const { iniciarSesion, usu_tipo } = useContext(AuthContext);

    const [formulario, setFormulario] = useState({
        correo: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        postLogin(formulario.correo, formulario.password).then(data => {
            // console.log(data);

            if (data.ok) {
                // TODO llamar a iniciarSesion del context y enviarle el token
                iniciarSesion(data.content);
                // console.log("USU_TIPO : ", data.content.usuario_tipo);
            }
        });
    };

    useEffect(() => {
        console.log("USU_TIPO : ", usu_tipo);
        if (usu_tipo === "admin") {
            history.push("admin/");
        };
        if (usu_tipo === "profe") {
            history.push("profesor/");
        };
        if (usu_tipo === "alumno") {
            history.push("alumno/");
        }
    }, [usu_tipo])

    return (
        <div className="body-login">
            <div className="contenedor-formulario">
                <div className="formulario-login">
                    <h2 className="formulario-login-h2">Iniciar Sesión</h2>
                    <form onSubmit={onSubmit}>

                        <div className="formulario-login-group">
                            <label className="formulario-login-group-label">Usuario:</label>
                            <div className="group">
                                <i className="fas fa-user"></i>
                                <input
                                    type="email"
                                    className="formulario-login-group-input"
                                    placeholder="Usuario"
                                    name="correo"
                                    value={formulario.correo}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="formulario-login-group">
                            <label className="formulario-login-group-label">Contraseña:</label>
                            <div className="group">
                                <i className="fas fa-unlock"></i>
                                <input
                                    type="password"
                                    className="formulario-login-group-input"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={formulario.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="forgot">
                            <a className="forgot-password" href="!#">Olvidaste tu contraseña?</a>
                            <p><input className="formulario-login-group-input" type="checkbox" />Mostrar contraseña</p>
                        </div>
                        <button className="formulario-login-group-button" type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthLoginScreen;
