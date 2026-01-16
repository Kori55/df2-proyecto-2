import { HashRouter as Router, Routes, Route } from "react-router-dom"
import {Home} from "./Pages/Home"
import {Contacto} from "./Pages/Contacto"
import {SobreNosotros} from "./Pages/SobreNosotros"
import {Blog} from "./Pages/Blog"
import {IniciarSesion} from "./Pages/IniciarSesion"
import {Productos} from "./Pages/Productos"

import "./App.css"
import Fondo from './components/Fondo.jsx'
import Menu from "./components/Menu.jsx"
import Boton from './components/Boton.jsx'

function App() {
  return (
    <>
    <Fondo></Fondo>
    <Boton></Boton>
      <Router>
          <Menu></Menu>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/sobre-nosotros" element={<SobreNosotros/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/productos" element={<Productos/>}/>
              <Route path="/login" element={<IniciarSesion/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
