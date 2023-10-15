import React, { createContext, useState } from 'react';

export const CartContext2 = createContext({
  cartState2: []
});

export const CartProvider = ({ children }) => {
  //Estado y las funciones relacionadas con el carrito
  const [cartState2, setCartState2] = useState([]);

  //funciones para agregar, eliminar o actualizar elementos en el carrito

  const addItem = (productoAgregado, cantidad) => {

    if (!isInCart(productoAgregado)) {
      setCartState2(prev => [...prev, {...productoAgregado, cantidad}])
      console.log('este es el cartState2 con el nuevo producto: ' , cartState2, 'nuevo productoAgregado:', productoAgregado);
    } else {
      console.error('el producto ya fue agregado')
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cartState2.filter(prod => prod.id !== itemId)
    setCartState2(cartUpdated)
  }

  const clearCart = () => {
    setCartState2([])
  }

  const isInCart = (productoAgregado) => {
    const itemId = productoAgregado.id 
    return cartState2.some(prod => prod.id === itemId)
  }

  return (
    <CartContext2.Provider value={{ cartState2, setCartState2, addItem, removeItem, clearCart }}>
      {children}
    </CartContext2.Provider>
  );
};


