import React from 'react'
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../CheckoutForm/checkout.css";



function Checkout() {
    return (
        <div>
            <h1 className='alignCenter'>Gracias por tu compra!  <BsCartCheck /></h1>

            <h2 className='alignCenter'>Recibirás actualizaciones de tu pedido en el mail que nos proporcionaste.</h2>
            <div className='alignCenter'>
                <Link to="/">
                    <button className='btnWhite'>Volver a la tienda</button>
                </Link>
            </div>

        </div>

    )
}

export default Checkout