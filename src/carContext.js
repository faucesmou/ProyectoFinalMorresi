import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Aquí defines el estado y las funciones relacionadas con el carrito
  const [cartState, setCartState] = useState(/* inicializa tu estado aquí */);

  // Puedes definir funciones para agregar, eliminar o actualizar elementos en el carrito

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
