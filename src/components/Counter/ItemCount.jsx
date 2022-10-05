import React, { useState } from 'react'
import "../Productos/Item.css";


function ItemCount({ stock, onAddToCart }) {
    const [count, setCount] = useState(1);

    function handleSubstrack() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function handleAdd() {
        if (count < stock) {
            setCount(count + 1)
        }
    }


    return (


        <div className='ItemCount'>
            <button onClick={handleSubstrack}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <div>
                <button id='addToCartBtn' onClick={() => onAddToCart(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount