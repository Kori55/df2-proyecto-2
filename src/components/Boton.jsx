import menuIcon from "../assets/menu icon.png"

function Toggle() {
    menu.classList.toggle("no")
}

function Boton() {
    return (
        <>
            <button class="boton" onClick={Toggle}>
                <img src={menuIcon} height="60" width="60" />
            </button>
        </>
    )
}

export default Boton