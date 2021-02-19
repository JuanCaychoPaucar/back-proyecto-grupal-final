import { URL_BACKEND } from "../environments/environments";

//* USUARIOS
export const postRegistroUsuario = async (objUsuario, token) => {
    const peticion = await fetch(`${URL_BACKEND}/registrar`, {
        method: "POST",
        body: JSON.stringify(objUsuario),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};


export const postSubirImagen = async (id, formData, token) => {
    const peticion = await fetch(`${URL_BACKEND}/fotoUsuario/${id}`, {
        method: "POST",
        body: formData,
        headers: {
            // "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};


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


//* GRADOS
export const postGrado = async (objGrado, token) => {
    const peticion = await fetch(`${URL_BACKEND}/grado`, {
        method: "POST",
        body: JSON.stringify(objGrado),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};


export const getGrados = async () => {
    const peticion = await fetch(`${URL_BACKEND}/grado`);

    const data = await peticion.json();
    return data;
};


export const putGrado = async (objGrado, token) => {
    const peticion = await fetch(`${URL_BACKEND}/actualizarGrado/${objGrado.grado_id}`, {
        method: "PUT",
        body: JSON.stringify(objGrado),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};



//* CURSOS
export const postRegistrarCurso = async (objCurso, token) => {
    const peticion = await fetch(`${URL_BACKEND}/curso`, {
        method: "POST",
        body: JSON.stringify(objCurso),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};


export const getCursos = async () => {
    const peticion = await fetch(`${URL_BACKEND}/curso`);

    const data = await peticion.json();
    return data;
};


export const getCursosById = async (id) => {
    const peticion = await fetch(`${URL_BACKEND}/cursoFilter/${id}`);

    const data = await peticion.json();
    return data;
};


export const putCurso = async (objCurso, token) => {
    const peticion = await fetch(`${URL_BACKEND}/actualizarCurso/${objCurso.curso_id}`, {
        method: "PUT",
        body: JSON.stringify(objCurso),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};



