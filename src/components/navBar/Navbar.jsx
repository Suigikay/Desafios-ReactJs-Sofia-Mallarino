import "./Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className="Navbar">
            <Link to="/">
                <img src="/assets/logo.png" alt="logo" className="logo" />
            </Link>
            <div className="Navbar">
                <h4>
                    <ul>
                        <li> <Link to="/category/tratamientos"> Tratamientos</Link></li>
                        <li> <Link to="/category/limpieza"> Limpieza</Link></li>
                        <li> <Link to="/category/cuidados"> Cuidados</Link></li>
                        <li> <Link to="/"> Inicio</Link></li>

                    </ul>
                </h4>
                <CartWidget />

            </div>
        </nav>

    );
}

export default Navbar;
