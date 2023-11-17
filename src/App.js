
import './App.css';
import CollapsibleExample from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { createContext, useState, useEffect } from "react";
import React from 'react';
import productsData from './data/productsDataBase.json';
import { ThemeProvider } from './ThemeContext'
import { CartProvider } from './context/cartContext';

// Configuro las variables de entorno
/* dotenv.config(); */


export const CartContext = createContext();


function App() {

  /*   const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    }; */

  const [cartState, setCartState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false); // Después de 3 segundos, cambiar isLoading a false
    }, 1000); // 3000 milisegundos = 3 segundos

    window.addEventListener("load", () => {
      console.log('se ejecuta el load');
      const loaderWrapper = document.querySelector(".loader-wrapper");
      if (loaderWrapper) loaderWrapper.style.display = "none";
    });
  }, []);

  return (
    <ThemeProvider>

      <div className="App">
        <BrowserRouter>
          <CartProvider>
            <CartContext.Provider value={{ cartState, setCartState }}>
              {isLoading ? (
                // Mostrar el loader mientras isLoading sea true
                <div className="loader-wrapper">
                  <div className="loader"></div>
                </div>
              ) : (
                // Mostrar el contenido real cuando isLoading sea false
                <>
                  <header >
                    <CollapsibleExample />
                  </header>
                  <Routes>
                    <Route path="/" element={<ItemListContainer /* products={productsData} */ />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/item/:id" element={<ItemDetailContainer products={productsData} />} />
                    <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                </>)}
            </CartContext.Provider>
          </CartProvider>
        </BrowserRouter>


      </div>
    </ThemeProvider>
  );
}

export default App;
