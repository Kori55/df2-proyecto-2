import TituloFondo from "../assets/pastelerias-cdmx-1024x683.jpg"
import TituloLogo from "../assets/icono.png"

import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
        <div id="main">
            <div class="container">
                <div class="hometitulo">
                    <div class="container">
                        <div class="row-1">
                            <img class="fondo" src={TituloFondo}/>
                            <img class="logo" src={TituloLogo}/>
                        </div>
                        <div class="row-2">
                            <h1>Pasteleria Mil Sabores</h1>
                        </div>
                        <div class="row-3">
                            <p>aajhbasdhjddddddddddddddddddddddbsadbjhsdahjb</p>
                        </div>
                    </div>
                </div>
                <div class="containerr">
                    <div id="homeinfo" class="uno">
                        <img class="imagen" src={TituloFondo}/>
                        <div class="container">
                            <h1>Productos</h1>
                            <Link to="/productos"><button/></Link>    
                        </div>
                    </div>
                    <div id="homeinfo" class="dos">
                        <div class="container">
                            <h1>Blog</h1>
                            <Link to="/blog"><button/></Link>    
                        </div>
                        <img class="imagen" src={TituloFondo}/>
                    </div>
                    <div id="homeinfo" class="uno">
                        <img class="imagen" src={TituloFondo}/>
                        <div class="container">
                            <h1>Sobre Nosotros</h1>
                            <Link to="/sobre-nosotros"><button/></Link>    
                        </div>
                    </div>
                    <div id="homeinfo" class="dos">
                        <div class="container">
                            <h1>Contactanos</h1>
                            <Link to="/contacto"><button/></Link>    
                        </div>
                        <img class="imagen" src={TituloFondo}/>
                    </div>
                    <div id="homeinfo" class="uno">
                        <img class="imagen" src={TituloFondo}/>
                        <div class="container">
                            <h1>Github</h1>
                            <a href="https://github.com/Kori55/df2-proyecto-2">
                                <button/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

/*
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
                */
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
            */