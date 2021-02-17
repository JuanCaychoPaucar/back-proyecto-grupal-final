import { URL_BACKEND } from "../environments/environments";

export const postLogin = async (correo, password) => {
    const peticion = await fetch(`${URL_BACKEND}/login`, {
        method: "POST",
        body: JSON.stringify({
            correo: correo,
            password: password,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await peticion.json();
    // console.log("LOGIN", data);
    return data;
};


export const getUsuarioPorId = async (id) => {
    const peticion = await fetch(`${URL_BACKEND}/usuariosFilter/${id}`);
    const data = await peticion.json();

    return data;
};


export const getUsuarioPorCorreo = async (correo) => {
    const peticion = await fetch(`${URL_BACKEND}/usuarioCorreo/${correo}`);
    const data = await peticion.json();

    return data;
}



export const verificarToken = async (token) => {
    const peticion = await fetch(`${URL_BACKEND}/verificar`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    const data = await peticion.json();
    return data;
};