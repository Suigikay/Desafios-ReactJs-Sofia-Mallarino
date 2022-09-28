import React, { useState, useEffect } from 'react'
import { getSingleItems } from '../../services/mockApi';
import ItemDetail from './ItemDetail';
import './ItemDetail.css';



function ItemDetailContainer() {
    let [data, setData] = useState({});

    useEffect(
        () => {
            getSingleItems().then((respuestaDatos) => setData(respuestaDatos));
        },
        []
    );

    return (
        <div >
            <div className='itemDetail'>
                <ItemDetail
                    title={data.title}
                    detail={data.detail}
                    img={data.img}
                    price={data.price} />
            </div>

        </div>

    )
}

export default ItemDetailContainer