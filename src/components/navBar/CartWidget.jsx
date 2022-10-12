import React, { useContext } from "react";
import { cartCtx } from "../../context/cartContext";


function CartWidget() {
    const { getTotalItemsInCart } = useContext(cartCtx);

    return (
        <div>
            <img src="/assets/shoppingCart.png" alt="carrito" class="shoppingCart" />
            <span>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
        </div>
    );
}

export default CartWidget;