import React, { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";



function CartWidget() {
    const { getItemQty } = useContext(cartCtx);

    return (
        <div className="bagIconCount">
            <Link to="/cart">
                <h2><FaShoppingBag className="bagIcon" /></h2>
            </Link>
            <span className="bagIconNumber" >{getItemQty()}</span>

        </div>

    );
}

export default CartWidget;