import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockApi";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
function ItemListContainer() {
    let [data, setData] = useState([]);

    const { cat } = useParams();

    useEffect(() => {
        if (cat === undefined) {
            getItems().then((respuestaDatos) => setData(respuestaDatos));
        }
        else {
            getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));

        }
    }, [cat]);


    return (

        <div>
            <div className="products">
                <ItemList data={data} />
            </div>
        </div>
    );
}

export default ItemListContainer;
