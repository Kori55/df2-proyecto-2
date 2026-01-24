import axios from "axios";

const BASE_URL = `http://localhost:8080/api/carrito`;

const getSessionId = () => {
    let id = localStorage.getItem("sessionId");
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("sessionId", id);
    }
    return id;
};

const agregarProducto = (productoId) => {
    const sessionId = getSessionId();
    return axios.post(`${BASE_URL}/${sessionId}/add/${productoId}`);
};

const obtenerCarro = () => {
    const sessionId = getSessionId();
    return axios.get(`${BASE_URL}/${sessionId}`);
};

export default {
    agregarProducto,
    obtenerCarro
};