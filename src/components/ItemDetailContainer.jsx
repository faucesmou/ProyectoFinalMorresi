import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Item2 from "./Item2";
import BotonContador from "./ItemCount";

//firebase
/* import { getDocs, doc} from 'firebase/firestore';
import { db } from '../../src/services/firebase/firebaseConfig' */

const ItemDetailContainer = ({ products }) => {
  //trabajando en el contador y carrito:
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOndAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  /* lógica para la base de datos : 
const [products, setProducts] = useState(null);
const [loading, setLoading] = useState(true);

const { itemId } = useParams ();

useEffect(() => {
  setLoading(true)

  const docRef = doc(db, 'products', itemId)
})
getDocs(docRef) 
     .then(response => {
       const data = response.data() 
       const productAdapted = {id: response.id, ...data}
       setProduct(productAdapted)
     })
     .catch(error => {
       console.log(error)
     })
     .finally(()=> {
       setLoading(false)
     }) */

  // Obtener el parámetro "id" de la URL
  const { id } = useParams();
  if (!id) {
    return <div> problema con el id</div>;
  }
  // Busca el producto correspondiente por su ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  } else
    return (
      <div className="container">
        <h2 className="product-title">{product.name}</h2>
        <h5> ${product.description}</h5>
        <p>Precio: ${product.price}</p>
        <div className="item-list-container-detail">
          <Item2 product={product} />
          <BotonContador producto={product} />
        </div>
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
