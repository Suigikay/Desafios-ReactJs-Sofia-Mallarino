import React from 'react'

function ItemDetail(props) {
    let { title, detail, price, img } = props;


    return (
        <div className='container'>
            <img src={img} alt="img detalle" />
            <div className='detailContainer'>
                <h1>{title}</h1>
                <h2>{detail}</h2>
                <h3>$ {price}</h3>

            </div>

        </div>
    );
}

export default ItemDetail