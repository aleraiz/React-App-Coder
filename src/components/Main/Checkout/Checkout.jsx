import React, { useState, useEffect } from "react";
import useCartContext from "../../../context/CartContext";
import { generateOrder } from "../../../service/firebase";
import "./Checkout.scss"

const Checkout = () => {
  const { itemsInCart, totalItemsInCart } = useCartContext();

  const initialForm = {
    buyer: {
      name: "",
      apellido: "",
      phone: "",
      email: "",
    },
    items: itemsInCart,
    total: totalItemsInCart(),
    date: Date.now(),
  };

  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    setFormErrors(validate(form));
    setIsSubmit(true);

  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const orderData = form;
      generateOrder(orderData);
      setForm(initialForm);

    }
  }, [formErrors]);

  const validate = (form) => {
    const errors = {};
    if (!form.buyer.name) {
      errors.name = "Name is required!";
    }
    if (!form.buyer.apellido) {
      errors.apellido = "Last name is required!";
    }
    if (!form.buyer.phone) {
      errors.phone = "Phone is required!";
    }
    if (!form.buyer.email) {
      errors.email = "Email is required!";
    } 
    return errors;
  };

  return (
    <div className="Checkout-formulario">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.buyer.name}
          onChange={handleChange}
        />
        <p>{formErrors.name}</p>
        <label htmlFor="apellido">Last name:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={form.buyer.apellido}
          onChange={handleChange}
        />
        <p>{formErrors.apellido}</p>
        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={form.buyer.phone}
          onChange={handleChange}
        />
        <p>{formErrors.phone}</p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.buyer.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
        <button type="sumbit">Finalizar compra</button>
      </form>
    </div>
  );
};

export default Checkout;

// const Checkout = () => {
//   const { itemsInCart, totalItemsInCart } = useCartContext();

//   const initialForm = {
//     buyer: {
//       name: "",
//       apellido: "",
//       phone: "",
//       email: "",
//     },
//     items: itemsInCart,
//     total: totalItemsInCart(),
//     date: Date.now(),
//   };

//   const [error, setError] = useState(null);
//   const [form, setForm] = useState(initialForm);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       buyer: {
//         ...form.buyer,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !form.buyer.name.trim() ||
//       !form.buyer.apellido.trim() ||
//       !form.buyer.phone.trim() ||
//       !form.buyer.email.trim()
//     ) {
//       setError(true);
//     } else setError(false);

//     if (error == false) {
//       const orderData = form;
//       generateOrder(orderData);
//       setError(null);
//       setTimeout(() => {
//         setForm(initialForm);
//       }, 5000);
//     }
//   };

//   return (
//     <div className="Checkout-formulario">
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={form.buyer.name}
//           onChange={handleChange}
//         />
//         <label htmlFor="apellido">Last name:</label>
//         <input
//           type="text"
//           id="apellido"
//           name="apellido"
//           value={form.buyer.apellido}
//           onChange={handleChange}
//         />
//         <label htmlFor="phone">Phone:</label>
//         <input
//           type="number"
//           id="phone"
//           name="phone"
//           value={form.buyer.phone}
//           onChange={handleChange}
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={form.buyer.email}
//           onChange={handleChange}
//         />
//         {error == true ? <h4>Debe completar todos los campos</h4> : <></>}
//         <button type="sumbit">Finalizar compra</button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
