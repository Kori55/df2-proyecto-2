const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("errores")

import "./InicioSesion/InicioSesion.css"


function submitButAwesomelyFake() {
    let errores = ""
    let entrar = false
    let expCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if (nombre.value.length < 6){
        errores += 'El nombres es corto debe tener largo 6 <br>'    
        entrar = true
    }

    if(pass.value.length < 8){
        errores += 'La contraseña debe tener 8 caracteres <br>'
        entrar = true
    }

    if (entrar){
        parrafo.innerHTML = errores
    }
    else{
        parrafo.innerHTML = "Enviado"
    }
}

/*
form.addEventListener("submit",e=>{

    e.preventDefault()
    let errores = ""
    let entrar = false
    let expCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (nombre.value.length < 6){
        errores += 'El nombres es corto debe tener largo 6 <br>'    
        entrar = true
    }

    if(!expCorreo.test(email.value)){
        errores += 'el correo no es válido <br>'
        entrar = true
    }

    if(pass.value.length < 8){
        errores += 'La contraseña debe tener 8 caracteres <br>'
        entrar = true
    }

    if (entrar){
        parrafo.innerHTML = errores
    }
    else{
        parrafo.innerHTML = "Enviado"
    }
})
    
*/
export function IniciarSesion() {
    return (
        <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"/>
            <div id="main">
                <h1>Inicio Sesión</h1>
                <div class="iniciosesion">
                    <form id="form" action="">
                        <div class="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="" id="name" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Correo</label>
                            <input type="email" name="" id="email" class="form-control"/>
                        </div>
                        <div class="form-group">
                           <label htmlFor="password">Contraseña</label>
                            <input type="password" name="" id="password" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Enviar Datos</button>
                            <button class="btn btn-warning">Cancelar</button>
                            <p style="color: red;" id="errores"></p>
                        </div>
                    </form>
                </div>
            </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"/>
        </>
    )   
}