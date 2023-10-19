import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
/* import { StrictMode } from "react" */
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
/* import dotenv from 'dotenv';
dotenv.config(); */


const firebaseConfig = {
  apiKey: "AIzaSyDa9SiqWU5S3Cps0-S_nowBMTQD6L7Sf_E",
  authDomain: "coderhouse-ecommercemorresi.firebaseapp.com",
  projectId: "coderhouse-ecommercemorresi",
  storageBucket: "coderhouse-ecommercemorresi.appspot.com",
  messagingSenderId: "1013131402429",
  appId: "1:1013131402429:web:d4b3983dcfd41a7b2a6bd4"
};

/* const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, // Usa process.env para acceder a las variables
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}; */

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


