import "./Productos/Productos.css"
import cupcake from "../assets/cupacke.jpg"

export function Productos() {
    return (
        <>
            <div id="main">
                <h1>Productos</h1>
            </div>
            <div id="productos">
                <div class="producto-carta">
                    <img src={cupcake} height="200"/>
                    <p>Cupcake</p>
                </div>
            </div>
        </>
    )
}