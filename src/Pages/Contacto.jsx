import "./Contacto/Contacto.css"
import fb from "../assets/contacto fb.jpg"
import ig from "../assets/contacto ig.png"
import ma from "../assets/contacto mail.png"
import wh from "../assets/contacto whatsapp.png"

export function Contacto() {
    return (
        <>
        <div id="main">
            <h1>Contactanos</h1>
                <div class="textolol">
                    <input type="text"/>
                    <button>Enviar</button>
                </div>
        </div>
        <div class="sociales">
            <div class ="social">
                <img src={wh} height="60" width="60"/>
                <p>+56 9 234867552</p>
            </div>
            <div class ="social">
                <img src={fb} height="60" width="60"/>
                <p>Mil sabores</p>
            </div>
            <div class ="social">
                <img src={ig} height="60" width="60"/>
                <p>@past.milsabores</p>
            </div>
            <div class ="social">
                <img src={ma} height="60" width="60"/>
                <p>milsabores@gmail.com</p>
            </div>
        </div>
        </>
    )
}