import Button from "react-bootstrap/Button";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import { CartContext2 } from "../context/cartContext";

function BotonContador({ producto }) {
  const { cartState2, addItem, removeItem, clearCart } =
    useContext(CartContext2);
  // estado para mostrar o quitar botones de incrementar o disminuir cantidades luego de "agregar al carrito":
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

  //trabajando en el contador para cartel de finalizar compra y carrito:

  const [cantidad, setCantidad] = useState(1);
  const stock = 5;

  useEffect(() => {
    console.log("El estado del carrito se ha actualizado:", cartState2);
  }, [cartState2]);

  const handleOndAdd = (cantidad) => {
    setCantidad(cantidad);
    setAgregadoAlCarrito(true);

    const productoAgregado = {
      id: producto.id,
      name: producto.name,
      price: producto.price,
      cantidad: cantidad,
    };
    addItem(productoAgregado, cantidad);
  };

  const handleRemoveFromCart = () => {
    removeItem(producto.id);
    setAgregadoAlCarrito(false);
  };

  const cleaningCart = () => {
    clearCart();
    setAgregadoAlCarrito(false);
  };

  // funciones para la vista de la cantidad:
  const incrementarCantidad = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="BotonContador">
      {agregadoAlCarrito ? (
        <>
          <Button
            onClick={() => handleRemoveFromCart()}
            variant="dark"
            type="submit"
            style={{ fontSize: "10px", background: "blue" }}
          >
            Quitar del carrito
          </Button>
          <Button
            onClick={() => cleaningCart()}
            variant="dark"
            type="submit"
            style={{ fontSize: "10px", background: "blue" }}
          >
            Restablecer carrito
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => decrementarCantidad()}
            style={{ marginLeft: "40px", marginRight: "0.2rem" }}
            variant="light"
          >
            -
          </Button>
          <span style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}>
            {cantidad}
          </span>
          <Button variant="light" onClick={() => incrementarCantidad()}>
            +
          </Button>
          <Button
            onClick={() => handleOndAdd(cantidad)}
            variant="dark"
            type="submit"
            style={{ fontSize: "10px", background: "blue" }}
          >
            Agregar al carrito
          </Button>
        </>
      )}

      <footer className="BotonContadorFooter">
        {cantidad > 0 ? (
          <Link to="/cart" className="Option">
            <button
              style={{
                fontSize: "10px",
                background: "orange",
                borderRadius: "20px",
                padding: "5px 10px",
                marginTop: "5px",
              }}
            >
              Terminar compra
            </button>
          </Link>
        ) : null}
      </footer>

      {/* <Button
        onClick={() => decrementarCantidad()}
        style={{ marginLeft: "40px", marginRight: "0.2rem" }}
        variant="light"
      >
        -
      </Button>
      <span style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}>
        {cantidad}
      </span>
      <Button variant="light" onClick={() => incrementarCantidad()}>
        +
      </Button>


      <Button
        onClick={() => handleOndAdd(cantidad)}
        variant="dark"
        type="submit"
        style={{ fontSize: "10px", background: "blue" }}
      >
        Agregar al carrito
      </Button>
      <Button
        onClick={() => handleRemoveFromCart()}
        variant="dark"
        type="submit"
        style={{ fontSize: "10px", background: "blue" }}
      >
        Quitar del carrito
      </Button>
      <Button
        onClick={() => cleaningCart()}
        variant="dark"
        type="submit"
        style={{ fontSize: "10px", background: "blue" }}
      >
        Restablecer carrito
      </Button>
     
      <footer className="BotonContadorFooter">
        {cantidad > 0 ? (
          <Link to="/cart" className="Option">
            <button
              style={{
                fontSize: "10px",
                background: "orange",
                borderRadius: "20px",
                padding: "5px 10px",
                marginTop: "5px",
              }}
            >
              Terminar compra
            </button>
          </Link>
        ) : null}
      </footer> */}
    </div>
  );
}
export default BotonContador;

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

/*  const incrementarCantidad = () => {
                if (cantidad < stock) {
                  setCantidad(cantidad + 1);
                  handleOndAdd(cantidad + 1);
                  /* agregarAlCarrito(cantidad + 1);  // Pasa el objeto producto como parámetro
                }
              };
            
              const decrementarCantidad = () => {
                if (cantidad > 0) {
                  setCantidad(cantidad - 1);
                  /*  agregarAlCarrito(cantidad - 1); // Pasa el objeto producto como parámetro
                }
              }; */

/*   const agregarAlCarrito = (nuevaCantidad) => {
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
            
                let totalCantidad = 0;
                  for (const id in nuevoCarrito) {
                    totalCantidad += nuevoCarrito[id].cantidad;
                  }
            
                  return {
                    ...prevState,
                    cartState: nuevoCarrito,
                    cantidadProductos: totalCantidad,
                  };
                });
              } */
