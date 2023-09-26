import React, { useState, useEffect } from "react";
import ProductCard from "./Item";
import BotonContador from "./ItemCount";

const DesafioClase = () => {
  const [productos, setProductos] = useState([]);


  function generarPrecioAleatorio(min, max) {
    try {
      min = min || 1; // Precio mínimo por defecto
      max = max || 1000; // Precio máximo por defecto
      if (min < 0 || max < 0 || min >= max) {
        throw new Error("Rango de precios no válido");
      }
      const precio = Math.random() * (max - min) + min;
      // Redondea el precio a dos decimales (opcional)
      return parseFloat(precio.toFixed(2));
    } catch (error) {
      console.error("Error al generar precio aleatorio:", error.message);
      return null; // Opcional: devuelve null en caso de error
    }
  }

  useEffect(() => {
    // Supongamos que obtienes tus datos de un async mock aquí
    const obtenerDatos = async () => {
      try {
        setTimeout(async () => {
          // Llamada a la API o async mock
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const data = await response.json();
          // Formateando los datos como productos ficticios
          const productosFicticios = data.slice(0, 20).map((post) => ({
            id: post.id,
            titulo: post.title,
            precio: generarPrecioAleatorio(10, 100), // Genera un precio aleatorio
            /* imagen: "URL_de_imagen_de_ejemplo",  */ // Usa una URL de imagen de ejemplo
          }));
          // Actualiza el estado con los datos obtenidos
          setProductos(productosFicticios);
        }, 2000);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <ProductCard
              id={producto.id}
              titulo={producto.titulo}
              precio={producto.precio}
              /*    imagen={producto.imagen} */
            >
              <BotonContador producto={producto} />
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesafioClase;
