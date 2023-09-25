
import Button from 'react-bootstrap/Button';
import React, { useContext, useState } from 'react';
import { CartContext } from "../App";


function BotonContador({ producto }) {
    const { cartState, setCartState } = useContext(CartContext);

    /* const itemsInCart = 1; */
    const [cantidad, setCantidad] = useState(1); 
    const stock = 5;

    const incrementarCantidad = () => {
        if (cantidad < stock) {
          setCantidad(cantidad + 1);
          /* agregarAlCarrito(cantidad + 1); */ // Pasa el objeto producto como parámetro
        }
      };
      
      const decrementarCantidad = () => {
        if (cantidad > 0) {
          setCantidad(cantidad - 1);
         /*  agregarAlCarrito(cantidad - 1); */ // Pasa el objeto producto como parámetro
        }
      };
      
      const agregarAlCarrito = (nuevaCantidad) => {
        // Actualiza el estado del carrito usando setCartState
        setCartState((prevState) => {
          // Copia el estado anterior
          const nuevoCarrito = { ...prevState.cartState };
      
          // Si el producto ya existe en el carrito, actualiza su cantidad
          if (nuevoCarrito[producto.id]) {
            nuevoCarrito[producto.id].cantidad += nuevaCantidad;
          } else {
            // Si el producto no existe en el carrito, crea una nueva entrada
            nuevoCarrito[producto.id] = {
              producto: producto,
              cantidad: nuevaCantidad,
            };
          }
      
          // Calcula la cantidad total de productos en el carrito
          let totalCantidad = 0;
          for (const id in nuevoCarrito) {
            totalCantidad += nuevoCarrito[id].cantidad;
          }
      
          return { ...prevState, cartState: nuevoCarrito, cantidadProductos: totalCantidad };
        });
      };
      
   /*  const incrementarCantidad = () => {
        if(cantidad < stock)
      setCantidad(cantidad + 1);
      agregarAlCarrito(cantidad);
    };
  
    const decrementarCantidad = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1);
        agregarAlCarrito(cantidad);
      }
    } */
   /*  const agregarAlCarrito = (cantidad) => {
        
        setCartState(prevState => ({
          ...prevState,
          cantidadProductos: prevState.cantidadProductos + cantidad,
          
        }));
      };
      const restarAlCarrito = (cantidad) => {
        
        setCartState(prevState => ({
          ...prevState,
          cantidadProductos: prevState.cantidadProductos - cantidad,
          
        }));
      }; */
      
      

  return (
    <div className="BotonContador">
      <div className="PrimeroContenido">
        <main className="primero-main">
          <section className="primeroMensaje">
            <article className="eleccion">
              <div className="individual"></div>
              <div>
      <Button variant="light" onClick={decrementarCantidad}>-</Button>
      <span style={{ marginLeft: "0.2rem", marginRight: "0.2rem"}}>{cantidad}</span>
      <Button variant="light" onClick={incrementarCantidad}>+</Button>
      <Button variant="dark" type="submit" style={{ fontSize: '12px' }} onClick={incrementarCantidad}>Agregar al carrito</Button>
    </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default BotonContador;