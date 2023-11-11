//obtener todos
export async function obtenerAlumnos() {
    try {
        const alumnos = await fetch("http://10.0.2.100:8080/");
        const data = await alumnos.json();
        return data;
    } catch (e) {
        return e.message;
    }
}