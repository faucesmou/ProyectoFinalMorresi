import React from 'react';
import Item2 from "./Item2";
import { Link } from "react-router-dom";

function ItemListContainer ({ /* mensaje, */ products })  {
    /* const mensaje = prop.text */
  return (
  /*  <div>
       <p>{mensaje}</p>       
   </div> */
    <div className="item-list-container">
    {products.map((product) => (
       <Link
       to={`/product/${product.id}`}
       className="text-decoration-none"
     >
      <Item2 key={product.id} product={product} />
      </Link>
    ))}
  </div>
  );
}

export default ItemListContainer;
