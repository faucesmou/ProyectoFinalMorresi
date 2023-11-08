import CheckoutForm from '../components/CheckoutForm'
import { useState, useContext } from "react";
/* import { CartContext } from "../App"; */
import { CartContext2 } from "../context/cartContext";
/* Resolver cartContext para poder actualizar la base de datos y generar el ticket */

import { Timestamp } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig2";
import {
  writeBatch,
  collection,
  query,
  where,
  getDocs,
  documentId,
} from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    console.log("Contenido del CartContext:", CartContext2);

    const { cart, total, clearCart } = useContext(CartContext2)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
       
        try {
            console.log('Contenido del carrito:', cart); 
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())

            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            
            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where('id','in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                console.log('este es el productAddedToCart: -->', productAddedToCart)

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1> Se está generando su orden...</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )

}



export default Checkout