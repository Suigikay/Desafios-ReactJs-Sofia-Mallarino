import React, { useState } from 'react'
import "../Productos/Item.css";


function ItemCount({ initial, stock }) {
    const [count, setCount] = useState(initial);

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

    function onAdd() {
        alert(`Se agregaron ${count} items al carrito`)
    }


    return (


        <div className='ItemCount'>
            <button onClick={handleSubstrack}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <div>
                <button id='addToCartBtn' onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount