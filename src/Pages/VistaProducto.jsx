import { Link } from 'react-router-dom'
import cupcake from "./Productos/cupacke.jpg"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ProductoService from "../services/ProductoService";


export function VistaProducto() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        ProductoService.obtenerProductoPorId(id)
            .then(res => setProducto(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!producto) {
        return <p>Cargando...</p>;
    }

    const agregarAlCarrito = (productoId) => {
        CarritoService.agregarProducto(productoId)
            .then(() => alert("Producto agregado al carrito"))
            .catch(err => console.error(err));
    };

    return (
        <>
            <div id="main">
                <h1>Producto</h1>
                <Link to="/productos">
                    <button>atrás</button>
                </Link>
                <button onClick={() => agregarAlCarrito(producto.id)}>Agregar al carrito</button>
                    <div id="vistaProducto">
                        <div class="container">
                            <img src={cupcake}/>
                            <div class="col2">
                                <h1>{producto.nombre}</h1>
                                <p>Stock: {producto.stock}</p>
                                <p>Precio: 2349807</p>
                                <div class="info">
                                    {producto.descripcion}
                                </div>    
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}