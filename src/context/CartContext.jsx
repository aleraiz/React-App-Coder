import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();

const useCartContext = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);

  function addItem(item, qty) {
    setItemsInCart([...itemsInCart, { ...item, qty }]);
  }

  function isInCart(id) {
    let found = itemsInCart.some((item) => {
      return item.id === id;
    });
    return found;
  }

  function removeItemFromCart(id) {
    let filterCart = itemsInCart.filter((item) => {
      return item.id !== id;
    });
    setItemsInCart(filterCart);
  }

  function clearCart() {
    setItemsInCart([]);
  }

  function countItemsInCart() {
    let total = 0;
    itemsInCart.forEach((item) => {
      total += item.qty;
    });
    return total;
  }

  function totalItemsInCart() {
    let totalPrecio = 0;
    itemsInCart.forEach((item) => {
      totalPrecio += item.qty * item.price;
    });
    return totalPrecio;
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        isInCart,
        removeItemFromCart,
        clearCart,
        countItemsInCart,
        totalItemsInCart,
        itemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default useCartContext;
