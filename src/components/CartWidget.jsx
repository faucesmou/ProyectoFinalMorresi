/* import { FaShoppingCart } from 'react-icons/fa'; */
import carroDeCompra2 from '../carroDeCompra2.png';
import { CartContext } from "../App";
import React, { useContext } from 'react';

function CartWidget() {
  const { cartState } = useContext(CartContext);
  // personalizar el contenido del carrito aquí
  return (
    <div className="cart-widget">
         <img src={carroDeCompra2} alt="Cart Icon" />
        {/* <FaShoppingCart /> */}
        <span className="cart-notification">{cartState.cantidadProductos}</span>
      {/* <i className="fa fa-shopping-cart"></i> */}
    </div>
  );
}

export default CartWidget;