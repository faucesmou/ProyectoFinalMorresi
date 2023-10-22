import React, { useContext, useEffect, useState } from "react";
import Item2 from "./Item2";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../ThemeContext";
import BotonContador from "./ItemCount";
/* import { CartContext2 } from "../context/cartContext"; */
import { useParams } from "react-router-dom";
import {  getDocs,
  getFirestore,
  collection,
} from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]); // Usamos un estado local para almacenar los productos

  const { categoryId } = useParams();
  console.log("ESTE ES el categoryId: ", categoryId);
  const db = getFirestore();
  const collectionRef = collection(db, "items");
  /* const categoryFilter = categoryId
    ? where("category", "==", categoryId)
    :  query (collectionRef); */

  useEffect(() => {
    console.log("ESTE ES el categoryId numero 2: ", categoryId);

    const fetchProducts = async () => {
      try {
        // traigo todos los productos:

        const productsSnapshot = await getDocs(collectionRef);
        const allProducts = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoryId) {
          // Si tengo un categoryId en la URL, filtra localmente los productos
          const filteredProducts = allProducts.filter(
            (product) => product.categoryId === categoryId
          );
          setProducts(filteredProducts);
          console.log(
            "Consulta realizada con éxito y productos filtrados localmente en setProducts; ",
            products
          );
        } else {
          // Si no tienes un categoryId en la URL, muestra todos los productos
          setProducts(allProducts);
          console.log("Category Id: ", categoryId);
          console.log(
            "Consulta realizada con éxito, se muestran todos los productos; ",
            products
          );
        }
      } catch (error) {
        console.error(
          "Error buscando los productos en la base de datos, error:",
          error
        );
      }
    };
    // Antes de realizar una nueva consulta, limpia el estado de los productos
    console.log(
      "Consulta realizada con éxito y productos filtrados localmente en setProducts; ",
      products
    );
    setProducts([]);
    fetchProducts();
  }, [categoryId]); // Este efecto se ejecutará cuando cambie la categoría

  /*   const { cartState2 } = useContext(CartContext2);
  useEffect(() => {
    console.log("El estado del carrito se ha actualizado:", cartState2);
  }, [cartState2]); */

  const { theme } = useContext(ThemeContext);

  return (
    
    <div
      className=""
    /*   style={{
        background: themes[theme].background,
        color: themes[theme].color,
      }} */
    >
      <div>
      <h2 className="cart-title">Mercado Pegoteado</h2>
      <h3 className="cart-subtitle">Productos disponibles</h3>
      </div>
      <div className="item-list-container" >{products.map((product) => (
        <Link
          to={`/item/${product.id}`}
          className="text-decoration-none"
          key={product.id}
        >
          <Item2 product={product} />
          <BotonContador producto={product} />
        </Link>
      ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

//intento de filtrar productos desde la URL hacia la base de datos:
/*   ? query(collectionRef, where("category", "==", categoryId))
: collectionRef;
const productsSnapshot = await getDocs(queryRef);
const productsData = productsSnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));
setProducts(productsData); */
/*  const [product, setProduct] = useState(null);


  const db = getFirestore();
  const [productsdb, setProductsdb] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  const collectionRef = categoryId
    ? query(collection(db, "items"), where("category", "==", categoryId))
    : collection(db, "items");

  getDocs(collectionRef)
    .then((response) => {
      const productsAdapted = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProductsdb(productsAdapted);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });


  const { cartState2 } = useContext(CartContext2);
  useEffect(() => {
    console.log("El estado del carrito se ha actualizado:", cartState2);
  }, [cartState2]);

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="item-list-container"
      style={{
        background: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      {products.map((product) => (
        <Link to={`/item/${product.id}`} className="text-decoration-none">
          <Item2 key={product.id} product={product} />
          <BotonContador producto={product} />
        </Link>
      ))}

    </div>
  );
} */

/*  <button onClick={() => insertarDatos()}> Agregar productos! </button> */

/*  useEffect(() => {
   const fetchData = async () => {
     try {
       const db = getFirestore();
       const biciRef = doc(db, "items", "uVLG31nSvmITcsRqpEYm");
       const snapshot = await getDoc(biciRef);
       
       if (snapshot.exists()) {
         setProduct({ id: snapshot.id, ...snapshot.data() });
         console.log('Snapshot correcto Este es el estado de product:', product);
       }
     } catch (error) {
       console.error('Error al obtener datos de Firestore:', error);
     }
   };
   
   fetchData();
 }, [0]); */



