import React, { useContext, useEffect, useState } from "react";
import { CartContext2 } from "../context/cartContext";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="Container">
      <h1>Checkout</h1>
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre
          <input
            className="Input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <label className="Label">
          Telefono
          <input
            className="Input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>

        <label className="Label">
          Email
          <input
            className="Input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>

        <button type="submit" className="SubmitButton">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
