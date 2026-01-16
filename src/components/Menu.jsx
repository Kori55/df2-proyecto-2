import { Link } from 'react-router-dom'

import './Menu.css'

function Menu() {
    return (
        <>
            <div id="menu">
                <div id="links">
                    <Link to="/login">
                        <span>Iniciar sesión</span>
                    </Link>
                    <Link to="/blog">
                        <span>Blog</span>
                    </Link>
                    <Link to="/productos">
                        <span>Productos</span>
                    </Link>
                    <Link to="/contacto">
                        <span>Contacto</span>
                    </Link>
                    <Link to="/sobre-nosotros">
                        <span>Sobre Nosotros</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Menu