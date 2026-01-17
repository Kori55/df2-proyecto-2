import { Link } from 'react-router-dom'

import './Menu.css'

function Menu() {
    return (
        <>
            <div id="menu" class="no">
                <div id="links">
                    <Link to="/">
                        <span>Inicio</span>
                    </Link>
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
                    <a href="https://github.com/Kori55/df2-proyecto-2">
                      <span>Github</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Menu