import React, { useContext } from "react";
import { CartContext2 } from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartState2, removeItem, clearCart } = useContext(CartContext2);

  // Función para calcular el subtotal de un producto
  const calculateSubtotal = (product) => {
    return product.price * product.cantidad;
  };

   // Función para calcular el subtotal de un producto
   const calculateTotal = () => {
    const total = cartState2.reduce((acc, product) => {
      return acc + calculateSubtotal(product);
    }, 0);
    return total;
   }

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (productId) => {
    removeItem(productId);
  };

  const cleaningCart = () => {
    clearCart();
  };

  if (cartState2.length === 0) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Carrito de Compras</h2>
      <h3 className="cart-subtitle">Resumen de tu compra</h3>
     
      {cartState2.map((product) => (
        <div key={product.id} className="cart-item">
          <div className="item-info">
            <h4 className="cart-subtitle" >Producto: {product.name}</h4>
            <img
              src={`/images/products/${product.imagen}`}
              alt={product.name}
              style={{ width: "100px" }} 
            />
            <p>Precio por unidad: ${product.price}</p>
          </div>
          <div className="item-quantity">
            <p>Cantidad: {product.cantidad}</p>
            <p>Subtotal: ${calculateSubtotal(product)}</p>
          </div>
          <button  className="cart-button-remove" onClick={() => handleRemoveFromCart(product.id)}>
            Quitar del carrito
          </button>
        </div>
      ))}
      <div>
      <p className="cart-total">Total de la compra: ${calculateTotal()}</p>
        <button /* style={{ marginTop: "20px" }} */ className="cart-button"  onClick={() => cleaningCart()}>
          Limpiar el carrito
        </button>
      </div>
      <div>
        <Link to="/checkout" /* className="Option" */ className="cart-button cart-button-primary">
          {" "}
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
