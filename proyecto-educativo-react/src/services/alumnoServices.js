import { URL_BACKEND } from "../environments/environments";

export const getCursosByGradoId = async (id, token) => {
    const peticion = await fetch(`${URL_BACKEND}/gradoCursos/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await peticion.json();
    return data;
};


export const getNotasByAlumnoId = async (id, token) => {
    const peticion = await fetch(`${URL_BACKEND}/verNotas?alumno_id=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await peticion.json();
    return data;
};