import Icono from "../assets/icono.png"
import TituloFondo from "../assets/pastelerias-cdmx-1024x683.jpg"
import TituloLogo from "../assets/icono.png"


import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div id="main">
            <div class="hometitulo">
                <div class="container">
                    <div class="row-1">
                        <img class="fondo" src={TituloFondo}/>
                        <img class="logo" src={TituloLogo}/>
                    </div>
                    <div class="row-2">
                        <h1>Pasteleria Mil Sabores</h1>
                        <p>aajhbasdhjbsadbjhsdahjb</p>
                    </div>
                </div>
            </div>
            <div class="homeinfo">
                <div class="container">
                    <div class="col-1">
                        <img class="imagen" src={TituloFondo}/>
                    </div>
                    <div class="col-2">
                        <h1>Blog</h1>
                        <Link to="/blog"><button/></Link>
                    </div>
                </div>
            </div>
            <div class="homeinfo">
                <div class="container">
                    <div class="col-2">
                        <h1>Productos</h1>
                        <Link to="/productos"><button/></Link>
                    </div>
                    <div class="col-1">
                        <img class="imagen" src={TituloFondo}/>
                    </div>
                </div>
            </div>
            <div class="homeinfo">
                <div class="container">
                    <div class="col-1">
                        <img class="imagen" src={TituloFondo}/>
                    </div>
                    <div class="col-2">
                        <h1>Sobre nosotros</h1>
                        <Link to="/sobre-nosotros"><button/></Link>
                    </div>
                </div>
            </div>
            <div class="homeinfo">
                <div class="container">
                    <div class="col-2">
                        <h1>Contactanos</h1>
                        <Link to="/contacto"><button/></Link>
                    </div>
                    <div class="col-1">
                        <img class="imagen" src={TituloFondo}/>
                    </div>
                </div>
            </div>
        </div>
        /*
            <>
            
            <div id="main" >
                <h1>Pasteleria Mil Sabores</h1>
                <img src={Icono} width="200" height="200"/>
                    <div class="main-links">
                    <p>
                        <Link to="/login">
                            <span>Iniciar sesión</span>
                        </Link>
                        • 
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
        */
    )
}