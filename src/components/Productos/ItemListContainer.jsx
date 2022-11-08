import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import '../ItemDetailContainer/ItemDetail.css';

import { getItems, getItemsByCategory } from "../../services/firestore";


function ItemListContainer() {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const { cat } = useParams();

    useEffect(() => {
        setData([]);
        setisLoading(true);
        if (cat === undefined) {
            getItems().then((respuestaDatos) => setData(respuestaDatos))
                .finally(() => setisLoading(false));;
        }
        else {
            getItemsByCategory(cat)
                .then((respuestaDatos) => setData(respuestaDatos))
                .finally(() => setisLoading(false))
        }
    }, [cat]);


    return (
        <div>
            <h1 className="bigTitle">Top Productos</h1>

            <div>
                {
                    isLoading
                    &&
                    <div className='loader'>
                        <ClipLoader
                            color={"#ac53ac"}
                            loading={data}
                            size={60}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                }
            </div>
            <div className="products">
                <ItemList data={data} />
            </div>
        </div>
    );
}

export default ItemListContainer;
