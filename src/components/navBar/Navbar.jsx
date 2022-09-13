import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav >
                <div className="Navbar">
                    <h4>
                        <ul>
                            <li> <a href="#inicio"> Inicio</a></li>
                            <li> <a href="#servicios"> Servicios</a></li>
                            <li> <a href="#productos"> Productos</a></li>
                            <li> <a href="#contacto"> Contacto</a></li>
                        </ul>
                    </h4>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
