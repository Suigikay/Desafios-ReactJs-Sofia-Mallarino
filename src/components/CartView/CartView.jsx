import React from 'react'
import { useContext } from 'react'
import { cartCtx } from "../../context/cartContext"

function CartView() {
    const context = useContext(cartCtx)
    const { cart, cleartCart, removeFromCart } = context
    let carritoVacio = false;

    if (carritoVacio) {
        return <div> Tu carrito está vacío</div>
    }
    return (
        <div>
            {cart.map((item) => (
                <div>
                    <h3>{item.title}</h3>
                    <p> Precio: {item.price}</p>
                    <p>Cantidad:  {item.count}</p>
                    <strong>{"Total:" + item.count * item.price}</strong>

                </div>
            ))}
        </div>
    );
}

export default CartView
