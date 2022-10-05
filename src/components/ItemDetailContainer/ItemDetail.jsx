import React, { useState } from 'react';
import ItemCount from "../Counter/ItemCount"
import { Link } from "react-router-dom";



function ItemDetail(props) {
    let { title, detail, price, img, stock } = props;


    const [cartState, setCartState] = useState(false);
    const handleAddToCart = (count) => {
        alert(`agregaste al carrito ${count} productos`);
        setCartState(true)
    };


    return (
        <div className='container'>
            <img src={img} alt="img detalle" />
            <div className='detailContainer'>
                <h1>{title}</h1>
                <h2>{detail}</h2>
                <h3>$ {price}</h3>
                {cartState === false ? <ItemCount stock={stock} onAddToCart={handleAddToCart} /> : <button > <Link to="/cart">Finalizar Compra!</Link></button>}


            </div>

        </div>
    );
}

export default ItemDetail