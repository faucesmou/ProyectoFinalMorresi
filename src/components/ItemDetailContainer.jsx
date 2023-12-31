import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item2 from "./Item2";
import BotonContador from "./ItemCount";
 import {  /* doc, */
  getDocs,
  getFirestore,
  collection,
  /* query,
  where,
  getDoc,
  addDoc,  */} from 'firebase/firestore';


const ItemDetailContainer = () => {
  //trabajando en el contador y carrito:
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const db = getFirestore();
  const collectionRef = collection(db, 'items');
  console.log("id from URL:", id);


  useEffect(() => {
    setLoading(true);

    getDocs(collectionRef)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          const data = doc.data();
          const productAdapted = { id: doc.id, ...data };
          setProduct(productAdapted);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, [id]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  } else {
    return (
      <div className="container" style={{ backgroundColor: "#f5f5f5", padding: "20px", marginTop: "20px"}} >
        <h2 className="product-title">{product.title}</h2>
        <h5>{product.description}</h5>
        {/* <p>Precio: ${product.price}</p> */}
        <div className="item-list-container-detail">
          <Item2 product={product} />
          <BotonContador producto={product} />
        </div>
      </div>
    );
  }

};

/* background-color: #f5f5f5;
padding: 20px;
 */

export default ItemDetailContainer;


