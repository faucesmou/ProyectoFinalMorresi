
import { getFirestore } from 'firebase/firestore' /* ESTO ESTA EN EL VIDEO DE CODER*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyDa9SiqWU5S3Cps0-S_nowBMTQD6L7Sf_E",
  authDomain: "coderhouse-ecommercemorresi.firebaseapp.com",
  projectId: "coderhouse-ecommercemorresi",
  storageBucket: "coderhouse-ecommercemorresi.appspot.com",
  messagingSenderId: "1013131402429",
  appId: "1:1013131402429:web:d4b3983dcfd41a7b2a6bd4"
}; */

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) /* ESTO ESTA EN EL VIDEO DE CODER */