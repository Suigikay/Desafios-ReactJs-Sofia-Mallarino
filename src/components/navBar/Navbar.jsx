import "./Navbar.css";
import CartWidget from "./CartWidget";


function Navbar() {
    return (

        <nav className="Navbar">
            <img src="/assets/logo.png" alt="logo" className="logo" />
            <div className="Navbar">
                <h4>
                    <ul>
                        <li> <a href="#inicio"> Inicio</a></li>
                        <li> <a href="#servicios"> Servicios</a></li>
                        <li> <a href="#productos"> Productos</a></li>
                        <li> <a href="#contacto"> Contacto</a></li>
                    </ul>
                </h4>
                <CartWidget />

            </div>
        </nav>

    );
}

export default Navbar;
