import React, { useState, useEffect } from "react";
import ProductCard from "./Item";
import BotonContador from "./ItemCount";
import productos from '../productos';

const ItemList = () => {
 

  return (
    <div className="container">
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <ProductCard
              id={producto.id}
              titulo={producto.titulo}
              precio={producto.precio}
              imagen={producto.imagen}
            >
              <BotonContador producto={producto} />
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
