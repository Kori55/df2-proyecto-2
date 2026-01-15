import { Link } from 'react-router-dom'

import './Menu.css'

function Menu() {
    return (
        <>
            <div id="menu">
                <div id="links">
                    <a href="iniciarsesion.jsx">
                        <span>Iniciar sesión</span>
                    </a>
                    <a href="blog.jsx">
                        <span>Blog</span>
                    </a>
                    <a href="productos.jsx">
                        <span>Productos</span>
                    </a>
                    <a href="contacto.jsx">
                        <span>Contacto</span>
                    </a>
                    <a href="sobrenosotros.jsx">
                      <span>Sobre nosotros</span>
                    </a>
                    <a href="https://github.com/Kori55/df2-proyecto">
                      <span>Github</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Menu