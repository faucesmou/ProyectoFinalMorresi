import React from 'react';
import ItemList from "./ItemList";

function ItemListContainer(prop) {
    const mensaje = prop.text
  return (
   <div>
       <p>{mensaje}</p>
       <ItemList/>
       
   </div>
  );
}

export default ItemListContainer;
