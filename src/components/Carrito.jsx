import { useEffect, useState } from "react";
import axios from "axios";
import "./Carrito.css";

import CarritoService from "../services/CarritoService";

function Carrito() {
    const [carro, setCarro] = useState(null);

    useEffect(() => {
        CarritoService.obtenerCarro()
            .then(res => setCarro(res.data))
            .catch(err => console.error(err));
    }, []);

    const quitarProducto = (productoId) => {
        CarritoService.quitarProducto(productoId)
            .then(() => alert("Producto borrado del carrito"))
            .catch(err => console.error(err));
    };

    return (
        <div id="carrito">
            <button>Ver carrito</button>

            <div id="carro">
                <table>
                    <tbody id="listado">
                        {!carro?.items || carro.items.length === 0 ? (
                            <tr>
                                <td>Carrito vacío</td>
                            </tr>
                        ) : (
                            carro.items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.producto.nombre}</td>
                                    <td><button onClick={() => quitarProducto(item.id)}>Borrar</button></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Carrito;