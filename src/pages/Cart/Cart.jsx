import React from 'react';
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div>
            Cart
            <Link to="/complete-order">Оформить заказ</Link>
        </div>
    );
};

export default Cart;