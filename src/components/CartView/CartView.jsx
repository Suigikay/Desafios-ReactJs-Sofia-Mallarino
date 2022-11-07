import React from 'react'
import { useContext } from 'react'
import { cartCtx } from "../../context/cartContext"
import Button from "../Button/Button";
import "./cart.css";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Link } from "react-router-dom";



function CartView() {
    const context = useContext(cartCtx)
    const { cart, deleteItem, emptyCart, getTotalPriceInCart } = context


    let carritoVacio = cart.length === 0;

    if (carritoVacio) {
        return <div> Tu carrito está vacío</div>
    }


    return (
        <>
            <div>
                <h1 className='title'>Tu Carrito</h1>
                <Button onClick={emptyCart} className="title">Borrar todo</Button>
            </div>


            <table className="cartList">
                <thead className="cartList_head">
                    <tr className="cartList_row">
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Quitar</th>
                        <th>Total</th>

                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (
                            <tr key={item.id} className="cartList_row">
                                <td>
                                    <img height={50} src={item.img} alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>$ {item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <Button onClick={() => deleteItem(item.id)}>Quitar</Button>
                                </td>
                                <th>$ {item.price * item.count}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <h3>El total de tu compra es de $ {getTotalPriceInCart()}</h3>
            <Link to="/" className='btnWhite'>Seguir comprando</Link>


            <CheckoutForm />

        </>
    );
}

export default CartView