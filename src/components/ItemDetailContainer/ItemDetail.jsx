import React, { useContext, useState } from 'react';
import ItemCount from "../Counter/ItemCount"
import { Link } from "react-router-dom";

import { cartCtx } from "../../context/cartContext"


function ItemDetail(item) {
    let { title, detail, price, img, stock } = item;
    const [isInCart, setIsInCart] = useState(false);
    // const [cartState, setCartState] = useState(false);

    const { addItem } = useContext(cartCtx);


    const handleAddToCart = (count) => {
        addItem(item, count)
        setIsInCart(true)
    };


    return (
        <div className='container'>
            <img src={img} alt="img detalle" />
            <div className='detailContainer'>
                <h1>{title}</h1>
                <h2>{detail}</h2>
                <h3>$ {price}</h3>
                {item.stock === 0 && (
                    <span style={{ color: "#aa0033" }}>Producto sin stock!</span>
                )}
                {/* /* {cartState === false ? <ItemCount stock={stock} onAddToCart={handleAddToCart} /> : <button > <Link to="/cart">Finalizar Compra!</Link></button>} */}
                {isInCart ? (
                    <Link to="/cart">Ir al carrito</Link>
                ) : (
                    <ItemCount stock={stock} onAddToCart={handleAddToCart} />
                )}
            </div>

        </div>
    );
}

export default ItemDetail