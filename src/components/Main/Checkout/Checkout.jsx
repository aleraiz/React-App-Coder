import React, { useState } from "react";
import useCartContext from "../../../context/CartContext";

const Checkout = () => {
  const { itemsInCart, totalItemsInCart } = useCartContext();

  const [form, setForm] = useState({
    buyer: {
      name: "",
      apellido:"",
      phone: "",
      email: "",
    },
    items: itemsInCart,
    total: totalItemsInCart(),
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.buyer.name}
          onChange={handleChange}
        />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={form.buyer.apellido}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={form.buyer.phone}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.buyer.email}
          onChange={handleChange}
        />
        <button type="sumbit">Finalizar compra</button>
      </form>
    </>
  );
};

export default Checkout;
