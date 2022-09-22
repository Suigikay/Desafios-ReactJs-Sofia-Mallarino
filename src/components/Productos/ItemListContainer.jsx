import React, { useState, useEffect } from "react";
import getItems from "../../services/mockApi";
import ItemList from "./ItemList";

function ItemListContainer() {
    let [data, setData] = useState([]);

    useEffect(
        () => {
            getItems().then((respuestaDatos) => setData(respuestaDatos));
        },
        []
    );


    return (

        <div>
            <div className="products">
                <ItemList data={data} />
            </div>
        </div>
    );
}

export default ItemListContainer;
