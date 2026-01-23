import "./Productos/Productos.css"
import cupcake from "../assets/cupacke.jpg"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import ProductoService from "../services/ProductoService";

function agregarAlCarrito(producto) {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

    const existe = carritoActual.find(p => p.id === producto.id);

    if (existe) {
        existe.cantidad += 1;
    } else {
        carritoActual.push({
            id: producto.id,
            nombre: producto.nombre,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActual));
}

export function Productos() {
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
                <h1>Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Detalles</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(productoss) && productoss.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.detalles}</td>
                            <td>{producto.stock}</td>
                            <td><button><Link to={`/productos/${producto.id}`}>Ver</Link></button></td>
                            <td><button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}
// () => ProductoService.borrarProducto(producto.id)
// 
/*
<div id="productos">
                <Link to="/productos/producto">
                    <div class="producto-carta">
                        <img src={cupcake} height="200"/>
                        <p>Cupcake</p>
                    </div>
                </Link>
            </div>
            */