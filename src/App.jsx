import { HashRouter as Router, Routes, Route } from "react-router-dom"
import {Home} from "./Pages/Home"
import {HomeAdmin} from "./Pages/Admin/HomeAdmin.jsx"
import {Contacto} from "./Pages/Contacto"
import {SobreNosotros} from "./Pages/SobreNosotros"
import {IniciarSesion} from "./Pages/IniciarSesion"

import {Productos} from "./Pages/Productos"
import {ProductosAdmin} from "./Pages/ProductosAdmin.jsx"
import {VistaProducto} from "./Pages/VistaProducto.jsx"
import {RegistrarProducto} from "./Pages/RegistrarProducto.jsx"

import {Blog} from "./Pages/Blog"
import {BlogVistaPost} from "./Pages/Blog/BlogVistaPost.jsx"

import "./App.css"
import Fondo from './components/Fondo.jsx'
import Menu from "./components/Menu.jsx"
import Boton from './components/Boton.jsx'
import Carrito from './components/Carrito.jsx'

function App() {
  return (
    <>
    <Fondo></Fondo>
    <Boton></Boton>
      <Router>
          <Menu></Menu>
          <Carrito></Carrito>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/admin" element={<HomeAdmin/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/sobre-nosotros" element={<SobreNosotros/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blog/post" element={<BlogVistaPost/>}/>
              <Route path="/productos" element={<Productos/>}/>
              <Route path="/productos-admin" element={<ProductosAdmin/>}/>
              <Route path="/productos/:id" element={<VistaProducto/>}/>
              <Route path="/login" element={<IniciarSesion/>}/>
              <Route path="/productos/registrar" element={<RegistrarProducto/>}/>
              <Route path="/productos/editar/:id" element={<RegistrarProducto/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
