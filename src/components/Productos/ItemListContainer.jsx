import React from "react";
import Card from "./Card";
import ItemCount from "../Counter/ItemCount";

function ItemListContainer() {
    return (

        <div>
            <h1 className="title">Top Productos</h1>
            <div className="products">
                <Card
                    price={7050}
                    title="Tratamiento Age Cure"
                    detail="Tres fórmulas complementarias para una cura de 30 días que resta años a tu piel."
                    img="https://www.germainedecapuccini.es/media/catalog/product/cache/826fcfeec7c79daa0a2e1a3dd76f41c1/3/9/390003_Timexpert_Rides_Age_Cure_01_c7dc.jpg"
                />
                <Card
                    price={3500}
                    title="Sérum Perfeccionador Equilibrante Oil-Free"
                    detail="La solución definitiva para las pieles que no logran hacer desaparecer las imperfecciones y granitos del rostro."
                    img="https://www.germainedecapuccini.es/media/catalog/product/cache/826fcfeec7c79daa0a2e1a3dd76f41c1/4/4/440144_Purexpert_Serum_Equilibrante_01_cf89.jpg"
                />
                <Card
                    price={2800}
                    title="Leche y Loción Desmaquillante Fundente"
                    detail="Desmaquillante que, en un solo gesto, limpia y tonifica la piel."
                    img="https://www.germainedecapuccini.es/media/catalog/product/cache/826fcfeec7c79daa0a2e1a3dd76f41c1/4/6/460028_Royal_Jelly_Desmaquillante_01_5638.jpg"

                />
            </div>
            <div className="ItemCount">
                <ItemCount initial={1} stock={3} />
                <ItemCount initial={1} stock={5} />
                <ItemCount initial={1} stock={2} />
            </div>
        </div>
    );
}

export default ItemListContainer;
