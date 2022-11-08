import React from 'react'
import "./footer.css";
import { Link } from "react-router-dom";



function footer() {
    return (
        <div>

            <footer>
                <section >
                    <div className='footerContainer'>
                        <div>
                            <Link to="/"  >
                                <img src="/assets/logo gris.png" className="logoFooter" alt="logo" />
                            </Link>
                        </div>


                        <div className="footerItem">
                            <h4>
                                Encontranos
                            </h4>
                            <p> 099 123 455</p>
                            <p> 099 456 123</p>
                            <p>chispa@mail.com</p>
                        </div>

                        <div>
                            <h4>
                                Horario
                            </h4>
                            <p> Lunes a viernes</p>
                            <p> 9 a 18 hs</p>
                        </div>


                    </div>
                </section>
            </footer>
        </div>
    )
}

export default footer