import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import React, { useState, createContext, useContext } from 'react'

const CartContext = createContext();

const useCartContext = ()=>{
    return useContext(CartContext)
}

export function CartContextProvider ({children}) {
  
  const [itemsInCart, setItemsInCart] = useState([]);
  
  function addItem(item,qty){
      setItemsInCart([...itemsInCart, {...item, qty}]);
  }

  function isInCart(id){
      let found = itemsInCart.some( (item) =>{
        return item.id === id;
      })
      return found;
    }

    function removeItemFromCart(id){
        let filterCart = itemsInCart.filter( (item) =>{
          return item.id !== id;
        });
        setItemsInCart(filterCart);
      }
  
  
  
    return (
    <CartContext.Provider value={ { addItem, isInCart, removeItemFromCart, quantity: 5, itemsInCart } }>
        {children}
    </CartContext.Provider>
  )
}

export default useCartContext;