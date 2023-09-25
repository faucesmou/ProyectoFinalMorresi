import React from 'react';
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

export default ItemDetailContainer;
