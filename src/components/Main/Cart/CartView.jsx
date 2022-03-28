import React, { useState } from "react";
import useCartContext from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import "./CartView.scss";

const CartView = () => {
  const { itemsInCart, removeItemFromCart, clearCart, totalItemsInCart } =
    useCartContext();
  const [total, setTotal] = useState("");

  itemsInCart.map((item) =>
    console.log(item)
    // setTotal(...total,(item.qty * item.price).toFixed(0))
  );

  console.log(total)

  if (itemsInCart.length === 0) {
    return (
      <div id="CartEmpty">
        <h2>No hay productos en el carrito</h2>
        <div className="Button">
          <Link to="/">
            <button>Volver al catálogo</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h2 id="CarritoTexto">Carrito de compras</h2>
        <div className="CartView">
          <div className="Cart">
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {itemsInCart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imageUrl} alt={item.name} />
                    </td>
                    <td>$ {item.price}</td>
                    <td>{item.qty}</td>
                    <td>$ {(item.qty * item.price).toFixed(0)}</td>
                    <td>
                      <button onClick={() => removeItemFromCart(item.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h3>Total: {totalItemsInCart()} </h3>
            </div>
            <button
              onClick={() => {
                alert("Compra realizada");
              }}
            >
              Pagar
            </button>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/">
              <button>Seguir comprando</button>
            </Link>
          </div>
          <div className="Checkout-formulario">
            <Checkout />
          </div>
        </div>
      </>
    );
  }
};

export default CartView;
