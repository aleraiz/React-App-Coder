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
  
    function clearCart(){
      setItemsInCart([]);
    }

    function countItemsInCart(){
      let total = 0;
      itemsInCart.forEach( (item) =>{
        total += item.qty;
      })
      return total;
    }
  
    return (
    <CartContext.Provider value={ { addItem, isInCart, removeItemFromCart, clearCart, countItemsInCart, quantity: 5, itemsInCart } }>
        {children}
    </CartContext.Provider>
  )
}

export default useCartContext;