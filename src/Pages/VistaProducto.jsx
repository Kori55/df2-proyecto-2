import { Link } from 'react-router-dom'
import cupcake from "./Productos/cupacke.jpg"
import React, { useState, useEffect } from 'react';
import ProductoService from "../services/ProductoService";


export function VistaProducto(prid) {
    const [productoss, setProductos] = useState([]);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = () => {
        ProductoService.listarProductos().then(response => {
            setProductos(response.data);
        }).catch(error => {
            console.log('Error', error);
        });
    }; 

    return (
        <>
            <div id="main">
                <h1>Producto</h1>
                <Link to="/productos">
                    <button>atrás</button>
                </Link>
                    <div id="vistaProducto">
                        <div class="container">
                            <img src={cupcake}/>
                            {Array.isArray(productoss) && productoss.map(producto => (
                                <div class="col2">
                                    <h1>{producto.nombre}</h1>
                                    <p>Stock: {producto.stock}</p>
                                    <p>Precio: 2349807</p>
                                    <div class="info">
                                        {producto.descripcion}
                                    </div>    
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </>
    )
}