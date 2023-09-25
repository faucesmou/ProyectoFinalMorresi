
import './App.css';
import CollapsibleExample from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { createContext, useState } from "react";

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
      {/* <ItemListContainer text= 'Hola padres! bienvenidos!' /> */}
      <Routes>  
          <Route path="/" element={<ItemListContainer text= 'Hola padres! bienvenidos!' />} />          
          <Route path="/novedades" element={<ItemDetailContainer text= 'Esta es la página de detalles!' />} />          
        </Routes>
        </CartContext.Provider>
        </BrowserRouter>
      
    </div>


  );
}

export default App;
