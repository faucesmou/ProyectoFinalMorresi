import React, { useContext } from 'react';
import { CartContext2 } from "../context/cartContext";
import { Link } from 'react-router-dom'

const Cart = () => {
    
    const { cartState2, removeItem, clearCart } = useContext(CartContext2);

    // Función para calcular el subtotal de un producto
    const calculateSubtotal = (product) => {
      return product.price * product.cantidad;
    };
  
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
          {cartState2.map((product) => (
            <div key={product.id} className="cart-item">
              <div className="item-info">
                <h4>{product.name}</h4>
                <p>Precio por unidad: ${product.price}</p>
              </div>
              <div className="item-quantity">
                <p>Cantidad: {product.cantidad}</p>
                <p>Subtotal: ${calculateSubtotal(product)}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(product.id)}>
                Quitar del carrito
              </button>
            </div>
          ))}
          <div>
              <button  style={{marginTop: '20px'}} onClick={() => cleaningCart()}>
                Limpiar el carrito
              </button>
          </div>
            <div>
            < Link to= '/checkout' className='Option' > Checkout</Link>
            </div>

        </div>
      );
    }
    
    export default Cart;