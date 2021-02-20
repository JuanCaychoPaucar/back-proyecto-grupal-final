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
export const getAlumnosByCursoId = async (id, token) => {
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