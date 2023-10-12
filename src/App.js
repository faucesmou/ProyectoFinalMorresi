
import './App.css';
import CollapsibleExample from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { createContext, useState } from "react";
import React from 'react';
import productsData from './data/productsDataBase.json';
import { ThemeProvider } from './ThemeContext'
export const CartContext = createContext();

// Crear el contexto de tema


const idsFiltrados = ['1', '4', '6'];
const idsTecno = ['2', '3', '7', '8', '9', '10', '14'];
const idsHogar = ['5', '11', '12', '13', '15'];

const electrodomesticos = productsData.filter((producto) => {
  const productoIdString = producto.id.toString();
  return idsFiltrados.includes(productoIdString);
});

const tecnologia = productsData.filter((producto) => {
  const productoIdString = producto.id.toString();
  return idsTecno.includes(productoIdString);
});

const hogar = productsData.filter((producto) => {
  const productoIdString = producto.id.toString();
  return idsHogar.includes(productoIdString);
});




function App() {

  
  const [cartState, setCartState] = useState([]);
  return (
    <ThemeProvider>
      
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ cartState, setCartState }}>
          <header >
            <CollapsibleExample />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer products={productsData} />} />
            <Route path="/category/electrodomesticos" element={<ItemListContainer products={electrodomesticos} />} />
            <Route path="/category/tecnologia" element={<ItemListContainer products={tecnologia} />}/>
            <Route path="/hogar" element={<ItemListContainer  products={hogar}/>} />
            <Route path="/item/:id" element={<ItemDetailContainer products={productsData} />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
  
    </div>
    </ThemeProvider>
  );
}

export default App;
