import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

export const CartWidget = ({ props }) => {
    const [numero, setNumero] = useState(0)
    return (
        <div className="cant-cart">
        <i className="bi bi-cart2"></i>
        <div className="cart-info">
        <p>{props}</p>
        <p>{numero}</p>
        </div>
        </div>
    )
}

export default CartWidget;