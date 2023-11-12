import React, { useContext, useEffect, useState } from "react";
import { CartContext2 } from "../context/cartContext";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { addDoc, getDocs } from "firebase/firestore";

const Checkout = () => {
 //----------------------------------------------------->
const [loading, setLoading] = useState(false)
const [orderId, setOrderId] = useState('')

const { cart, total, clearCart} = useContext(CartContext)

const createOrder = async ({ name, phone, email}) => {
  setLoading(true)

 
    const objOrder = {
      buyer: {
        name, phone, email
      },
      items: cart,
      total: total,
      date: Timestamp.fromDate(new Date())
    }
  

 /*  const orderAdded = await addDoc(orderRef, objOrder)
  setOrderId(orderAdded.id)
  clearCart() */

  /* const batch = writeBatch(db)

  const outOfStock = [];

  const ids = cart.map(prod => prod.id)

  const productsRef = collection(db, 'items')

  const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', )));

  const { docs } = productsAddedFromFirestore;

  docs.forEach(doc => {
    const dataDoc = doc.data()
    const stockDb = dataDoc.stock

    const productAddedToCart = cart.find(prod => prod.id === doc.id)
    const prodQuantity = productAddedToCart?.quantity 
  })*/
  
}

if(loading) {
  return <h1>Se está generando su orden...</h1>
}

if(orderId) {
  return <h1>El id de su orden es: {orderId}</h1>
}

return (
  <div>
    <h1>Checkout</h1>
    <CheckoutForm onConfirm={createOrder} />

  </div>
)
 //----------------------------------------------------->

  
};

export default Checkout;
