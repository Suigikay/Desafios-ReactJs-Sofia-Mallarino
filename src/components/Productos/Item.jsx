import React from "react";
import ItemCount from "../Counter/ItemCount";
import "./Item.css";



function Card(props) {
    let { price, title, img, detail, stock } = props;

    return (

        <div className="products">
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="card img"></img>
                </div>
                <div className="card-detail">
                    <h3>{title}</h3>
                    <p>{detail}</p>
                    <h4>$ {price}</h4>
                    <ItemCount initial={1} stock={stock} />
                </div>
            </div>
        </div>

    );
}

export default Card;
