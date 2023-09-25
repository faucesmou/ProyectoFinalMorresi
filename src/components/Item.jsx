import React from 'react';
import BotonContador from "./ItemCount";

const ProductCard = ({ id, titulo, precio,/*  imagen  */}) => {
  return (
    <div className="card">
    {/*   <img src={imagen} className="card-img-top" alt={titulo} /> */}
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">ID: {id}</p>
        <p className="card-text">Precio: ${precio}</p>
        <BotonContador/>
      </div>
    </div>
  );
};

export default ProductCard;