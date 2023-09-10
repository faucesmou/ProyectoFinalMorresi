import React from 'react';


function itemListContainer(prop) {
    const mensaje = prop.text
  return (
   <div>
       <p>{mensaje}</p>
   </div>
  );
}

export default itemListContainer;
