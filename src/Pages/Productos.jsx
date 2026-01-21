import "./Productos/Productos.css"
import cupcake from "../assets/cupacke.jpg"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import ProductoService from "../services/ProductoService";

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
                <Link to="/productos/registrar">Agregar nuevo producto</Link>
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
                            <td><button onClick={() => ProductoService.borrarProducto(producto.id)}>Borrar</button></td>
                            <td><button><Link to='/productos/editar/${producto.id}'>Editar</Link></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}

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