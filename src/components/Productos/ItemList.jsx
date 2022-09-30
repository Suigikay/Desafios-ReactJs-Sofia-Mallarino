import React from 'react'
import Card from "./Item";

function ItemList(props) {
    return (
        <div>
            {props.data.map((item) => {
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        img={item.img}
                        detail={item.detail}
                        stock={item.stock}
                    />
                );
            })}
        </div>
    )
}

export default ItemList