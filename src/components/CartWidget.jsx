/* import { FaShoppingCart } from 'react-icons/fa'; */
import carroDeCompra2 from '../carroDeCompra2.png';
import { CartContext } from "../App";
import React, { useContext } from 'react';
import { CartContext2 } from "../context/cartContext";
import { NavLink, useNavigate, Link } from "react-router-dom";

function CartWidget() {
  const { cartState2 } =
  useContext(CartContext2);

  const uniqueProductIds = new Set(cartState2.map((producto)=> producto.id));
  const cantidadProductos = uniqueProductIds.size;

  return (
    <NavLink  as={Link} to="/cart">
    <div className="cart-widget" style={{ display: cantidadProductos > 0 ? 'block' : 'none' }} >
         <img src={carroDeCompra2} alt="Cart Icon" />
       {/*  <FaShoppingCart /> */}
        <span className="cart-notification">{cantidadProductos}</span>
      <i className="fa fa-shopping-cart"></i>
    </div>
    </NavLink>
  );
}

export default CartWidget;


/* const { cartState } = useContext(CartContext); */