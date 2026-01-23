import './Carrito.css'

function Carrito() {
    
    const carro = JSON.parse(localStorage.getItem("carrito")) || [];

    return (
        <div id="carrito">
            <button>Ver carrito</button>
            <div id="carro">
                <table>
                    <tbody id="listado">
                        {carro.length === 0 && (
                            <tr>
                                <td>Carrito vacío</td>
                            </tr>
                        )}
                        {carro.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.nombre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Carrito;