import Fondo from './components/Fondo.jsx'
import Menu from "./components/Menu.jsx"
import Icono from "./assets/icono.png"
import Boton from './components/Boton.jsx'
import "./App.css"

function App() {
  return (
    <>
    <Fondo></Fondo>
    <Menu></Menu>
    <Boton></Boton>
        <div id="main">
          <div class="titulo">
            <h1>Pasteleria Mil Sabores</h1>
          </div>
        <img src={Icono} width="200" height="200"/>
        <div class="main-links">
            <p>
                <a href="blog.jsx">
                    <span>Blog</span>
                </a>
                 • 
                <a href="productos.jsx">
                    <span>Productos</span>
                </a>
                 • 
                <a href="contacto.jsx">
                    <span>Contacto</span>
                </a>
                 • 
                <a href="sobrenosotros.jsx">
                    <span>Sobre nosotros</span>
                </a>
            </p>
        </div>
    </div>
    </>
  )
}

export default App
