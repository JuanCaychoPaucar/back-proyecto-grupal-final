import { URL_BACKEND } from "../environments/environments";

//* CURSOS DE UN PROFESOR
export const getCursosByUsuarioId = async (id, token) => {
    const peticion = await fetch(`${URL_BACKEND}/cursoProfesor/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await peticion.json();
    return data;
};


//* ALUMNOS DE UN CURSO
export const getAlumnosByGradoId = async (id, token) => {
    const peticion = await fetch(`${URL_BACKEND}/gradoAlumnos/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await peticion.json();
    return data;
};


//* NOTAS DEL ALUMNO
export const postNotaCursoAlumno = async (objNota, token) => {
    const peticion = await fetch(`${URL_BACKEND}/subirNotas`, {
        method: "POST",
        body: JSON.stringify(objNota),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};


export const putNotaCursoAlumnoByNotaId = async (objNota, token) => {
    const peticion = await fetch(`${URL_BACKEND}/editarNota/${objNota.notas_id}`, {
        method: "PUT",
        body: JSON.stringify(objNota),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const data = await peticion.json();
    return data;
};


export const getNotaByAlumnoId = async (id, token) => {
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