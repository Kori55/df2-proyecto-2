import { Link } from "react-router-dom"

export function HomeAdmin() {
    return (
        <>
        <div id="main">
            <Link to="/productos-admin">Administrar productos</Link>
        </div>
        </>
    )
}