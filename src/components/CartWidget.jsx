import React from 'react';
/* import { FaShoppingCart } from 'react-icons/fa'; */
import carroDeCompra2 from '../carroDeCompra2.png';

function CartWidget() {
    const itemsInCart = 808;
  // personalizar el contenido del carrito aquí
  return (
    <div className="cart-widget">
         <img src={carroDeCompra2} alt="Cart Icon" />
        {/* <FaShoppingCart /> */}
        <span className="cart-notification">{itemsInCart}</span>
      {/* <i className="fa fa-shopping-cart"></i> */}
    </div>
  );
}

export default CartWidget;