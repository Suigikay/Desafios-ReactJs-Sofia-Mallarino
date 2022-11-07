import React, { useState, useEffect } from 'react';
import { getSingleItems } from '../../services/firestore';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import './ItemDetail.css';
import ClipLoader from "react-spinners/ClipLoader";


function ItemDetailContainer() {
    let [data, setData] = useState({});
    const [error, setError] = useState(false);


    const { id } = useParams();



    useEffect(
        () => {
            getSingleItems(id)
                .then((respuestaDatos) => setData(respuestaDatos))
                .catch((errormsg) => {
                    setError(errormsg.message)
                });
        }, [id]
    );

    if (!data.title) {
        return (
            <>
                {error ? (
                    <div>
                        <h2 style={{ color: "#aa0033" }}> Error: obteniendo los datos</h2>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className='loader'>
                        <ClipLoader
                            color={"#ac53ac"}
                            loading={data}
                            size={60}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                )}
            </>
        );
    }

    return (
        <div >
            <div className='itemDetail'>
                <ItemDetail
                    key={data.key}
                    id={data.id}
                    title={data.title}
                    detail={data.detail}
                    img={data.img}
                    price={data.price}
                    stock={data.stock}
                />
            </div>

        </div>

    )
}

export default ItemDetailContainer