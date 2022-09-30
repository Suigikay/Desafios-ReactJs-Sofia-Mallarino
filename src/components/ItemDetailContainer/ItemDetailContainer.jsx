import React, { useState, useEffect } from 'react';
import { getSingleItems } from '../../services/mockApi';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import './ItemDetail.css';



function ItemDetailContainer() {
    let [data, setData] = useState({});

    const { id } = useParams();



    useEffect(
        () => {
            getSingleItems(id).then((respuestaDatos) => setData(respuestaDatos));
        },
        [id]
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