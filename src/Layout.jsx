import NavBar from "./components/Menu"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}