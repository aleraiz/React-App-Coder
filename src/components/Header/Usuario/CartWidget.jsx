import React from 'react';
import { Link } from 'react-router-dom'
import useCartContext from '../../../context/CartContext'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {

  const {countItemsInCart } = useCartContext();


  return (
    <div>
        <li><Link to="/cartView"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
        {countItemsInCart() !==0 && <p>{countItemsInCart()}</p>}
    </div>
  );
};

export default CartWidget;
