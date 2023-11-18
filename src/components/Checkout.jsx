import { useState, useContext } from "react";
import { Timestamp } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig2";
import CheckoutForm from "../components/CheckoutForm";
/* import { CartContext } from "../App"; */
/* Resolver cartContext para poder actualizar la base de datos y generar el ticket */
import {
  writeBatch,
  collection,
  query,
  where,
  getDocs,
  /*   documentId, */
} from "firebase/firestore";

import { addDoc } from "firebase/firestore";
import { CartContext2 } from "../context/cartContext";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cartState2, clearCart } = useContext(CartContext2);

  // Función para calcular el subtotal de un producto
  const calculateSubtotal = (product) => {
    return product.price * product.cantidad;
  };

  const calculateTotal = () => {
    const total = cartState2.reduce((acc, product) => {
      return acc + product.subtotal;
    }, 0);
    return total;
  };

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      console.log("Contenido del carrito:", cartState2);
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cartState2,
        subtotal: calculateSubtotal(cartState2),
        total: calculateTotal(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cartState2.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where("id", "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stockDb;

        const productAddedToCart = cartState2.find(
          (prod) => prod.id === doc.id
        );
        const prodQuantity = productAddedToCart?.quantity;

        console.log("este es el productAddedToCart: -->", productAddedToCart);

        console.log("este es el objOrder: ---->", objOrder);
     

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);
        

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1> Se está generando su orden...</h1>;
  }

  if (orderId) {
    return (
      <div>
        <h1>Compra exitosa!</h1>
        <h2>El id de su orden es: {orderId}</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
