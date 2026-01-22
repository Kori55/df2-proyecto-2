import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductoService from '../services/ProductoService';

export function RegistrarProducto() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [detalles, setDetalles] = useState('');
    const [stock, setStock] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            ProductoService.obtenerProductoPorId(id).then(response => {
                setNombre(response.data.nombre);
                setDescripcion(response.data.descripcion);
                setDetalles(response.data.detalles);
                setStock(response.data.stock);
            });
        }
    }, [id]);

    const registrarProducto = (e) => {
        e.preventDefault();
        const producto = { nombre, descripcion, detalles, stock: Number(stock) || 0, imagen: "" };
        if (id) {
            ProductoService.actualizarProducto(id, producto).then(() => {
                navigate('/');
            });
        } else {
            ProductoService.registrarProducto(producto).then(() => {
                navigate('/');
            });
        }
    };

    return (
        <>
            <div id="main">
                <h2>{id ? 'Editar producto' : 'Agregar producto'}</h2>
                <Link to="/productos-admin">
                    <button>atrás</button>
                </Link>
                <form onSubmit={registrarProducto}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Descripcion:</label>
                        <input
                            type="text"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Detalles:</label>
                        <input
                            type="text"
                            value={detalles}
                            onChange={(e) => setDetalles(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Stock:</label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">{id ? 'Actualizar' : 'Guardar'}</button>
                </form>
            </div>
        </>
    );
};