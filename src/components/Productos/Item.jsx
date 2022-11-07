import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";



function Card(prop) {
    let { price, title, img, detail, id } = prop;

    const urlDetalle = `/producto/${id}`;

    return (

        <div className="products">
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="card img"></img>
                </div>
                <div className="card-detail">
                    <h3>{title}</h3>
                    <p>{detail}</p>
                    <div className="itemInline">
                        <h4>$ {price}</h4>
                        <Link to={urlDetalle}>
                            <button className="btnPink" >
                                Ver más
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Card;
