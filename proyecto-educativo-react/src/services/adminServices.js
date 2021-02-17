import { URL_BACKEND } from "../environments/environments";

export const getUsuariosByTipo = async (tipo) => {
    const peticion = await fetch(`${URL_BACKEND}/usuarios/${tipo}`);

    const data = await peticion.json();
    return data;
};


export const getUsuarioById = async (id) => {
    const peticion = await fetch(`${URL_BACKEND}/usuariosFilter/${id}`);

    const data = await peticion.json();
    return data;
};


export const putUsuario = async (objUsuario, token) => {
    const peticion = await fetch(`${URL_BACKEND}/editarUsuario/${objUsuario.usuario_id}`, {
        method: "PUT",
        body: JSON.stringify(objUsuario),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};