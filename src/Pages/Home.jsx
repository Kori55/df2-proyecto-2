import Icono from "../assets/icono.png"

import { Link } from 'react-router-dom'

export function Home() {
    return (
            <>
            <div id="main">
                <h1>Pasteleria Mil Sabores</h1>
            <img src={Icono} width="200" height="200"/>
            <div class="main-links">
                <p>
                    <Link to="/login">
                        <span>Blog</span>
                    </Link>
                    <Link to="/blog">
                        <span>Blog</span>
                    </Link>
                     • 
                    <Link to="/productos">
                        <span>Productos</span>
                    </Link>
                     • 
                    <Link to="/contacto">
                        <span>Contacto</span>
                    </Link>
                     • 
                    <Link to="/sobre-nosotros">
                        <span>Sobre Nosotros</span>
                    </Link>
                </p>
            </div>
        </div>
        </>
    )
}