import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";
import "./checkout.css";




function CheckoutForm() {
    const navigate = useNavigate()
    const context = useContext(cartCtx)
    const { cart, getTotalPriceInCart, emptyCart } = context;

    function handleCheckout(event) {
        event.preventDefault();

        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getTotalPriceInCart()
        };
        createBuyOrder(orderData).then(orderid => {
            navigate(`/checkout/${orderid}`)
        });
        emptyCart();
    }

    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
        payment: "",
        ID: ""

    })

    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }



    return (
        <div className="form-container">
            <h3>Ingresá tus datos para terminar la compra</h3>
            <div>
                <form onSubmit={handleCheckout}>
                    <div className="form-item">
                        <label htmlFor="name">Nombre</label>
                        <input
                            value={dataForm.name}
                            onChange={inputChangeHandler}
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            required
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="telefono">Telefono</label>
                        <input
                            value={dataForm.phone}
                            onChange={inputChangeHandler}
                            name="phone"
                            type="tel"
                            placeholder="091234567"
                            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                            required
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input
                            value={dataForm.email}
                            onChange={inputChangeHandler}
                            name="email"
                            type="email"
                            placeholder="Correo"
                            required
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="payment">Método de pago</label>

                        <select
                            value={dataForm.payment}
                            onChange={inputChangeHandler}
                            name="payment"
                            type="select"
                            placeholder="Seleccionar"
                            required
                        >
                            <option>Seleccione una opción</option>
                            <option>Transferencia</option>
                            <option>Efectivo</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="ID">Documento de Identidad</label>
                        <input
                            value={dataForm.ID}
                            onChange={inputChangeHandler}
                            name="ID"
                            type="tel"
                            placeholder="1234567-8"
                            pattern="[0-9]{7}-[0-9]{1}"
                            required
                        />
                    </div>

                    <div className="alignCenter">
                        <button type="submit" className="btnGreen">Finalizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckoutForm