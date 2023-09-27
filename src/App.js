
import './App.css';
import CollapsibleExample from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { createContext, useState } from "react";
import ItemList2 from './components/ItemList2';
import React from 'react';
import productsData from './data/productsDataBase.json';
export const CartContext = createContext();

function App() {
  const [cartState, setCartState] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ cartState, setCartState }}>
          <header >
            <CollapsibleExample />
          </header>
          <Routes>
            <Route path="/" element={<ItemList2 products={productsData} />} />
            <Route path="/novedades" element={<ItemDetailContainer text='Esta es la página de detalles!' />} />
            <Route path="/product/:id" element={<ItemDetailContainer products={productsData} />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
