import React from "react";

const ItemDetailContainer = ({ products, match }) => {
  // Obtiene el ID del producto desde la URL
  const productId = match.params.id;
  // Busca el producto correspondiente por su ID
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <h2 className="product-title">{product.name}</h2>
      <p>Precio: ${product.price}</p>
      {/* Aquí muestra otros detalles del producto */}
    </div>
  );
};

export default ItemDetailContainer;





/* import React from 'react';
import ItemList from "./ItemList";

function ItemDetailContainer(prop) {
    const mensaje = prop.text
  return (
   <div>
       <p>{mensaje}</p>
       <ItemList/>
       
   </div>
  );
}

export default ItemDetailContainer; */

