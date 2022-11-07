const data = [
    {
        id: 1,
        title: "Tratamiento Age Cure",
        price: 7050,
        detail: "Tres fórmulas complementarias para una cura de 30 días que resta años a tu piel.",
        img: "/assets/Tratamiento age cure.jpg",
        stock: 5,
        category: "tratamientos",
    },
    {
        id: 2,
        title: "Leche y Loción Desmaquillante Fundente",
        price: 2800,
        detail: "Desmaquillante que, en un solo gesto, limpia y tonifica la piel.",
        img: "/assets/Desmaquillante.jpg",
        stock: 5,
        category: "limpieza",
    },
    {
        id: 3,
        title: "Sérum Perfeccionador Equilibrante Oil-Free",
        price: 3500,
        detail: "La solución definitiva para las pieles que no logran hacer desaparecer las imperfecciones y granitos del rostro.",
        img: "/assets/Serum.jpg",
        stock: 2,
        category: "tratamientos",
    },
    {
        id: 4,
        title: "Corrector Labios y Contorno",
        price: 1950,
        detail: "Tratamiento intensivo diario que regenera, nutre y reconforta la piel del labio y su contorno recobrando un aspecto carnoso y juvenil gracias a su “efecto volumen.",
        img: "/assets/Corrector labios.jpg",
        stock: 5,
        category: "cuidados",
    },
    {
        id: 5,
        title: "Máscara Anti-Estrés Hidratante",
        price: 1050,
        detail: "Hidrata y relaja, compuesta de arcilla rosa recomendada para todo tipo de pieles",
        img: "/assets/Mascara.jpg",
        stock: 5,
        category: "cuidados",
    },
    {
        id: 6,
        title: "Stick Protector Invisible SPF 50+",
        price: 1900,
        detail: "La protección en formato barra para una aplicación cómoda, rápida y sin contacto.",
        img: "/assets/SPF.jpg",
        stock: 8,
        category: "cuidados",
    }
];


export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

export function getItemsByCategory(cat) {
    return new Promise((resolve, reject) => {

        let itemFind = data.filter((item) => {
            return item.category === cat;
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject(new Error("No encontramos el Item"));
        }, 2000);
    });
}



export function getSingleItems(idItem) {
    return new Promise((resolve, reject) => {
        let itemFind = data.find((item) => {
            return item.id === parseInt(idItem);
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject(new Error("No encontramos el Item"));
        }, 2000);
    });
}