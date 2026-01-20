import axios from "axios";

const BASE_URL = 'http://localhost:3306/api/productos';

class ProductoService {
    listarProductos() {
        return axios.get(BASE_URL);
    }

    obtenerProductoPorId(id) {
        return axios.get('${BASE_URL}/${id}');
    }

    registrarProducto(pr) {
        return axios.post(BASE_URL, pr);
    }

    borrarProducto(id) {
        return axios.delete('${BASE_URL}/${id}');
    }
}

export default new ProductoService();