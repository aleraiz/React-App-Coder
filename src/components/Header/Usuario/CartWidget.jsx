import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div>
        <li><a href=""><FontAwesomeIcon icon={faShoppingCart} /></a></li>
        <p>3</p>
    </div>
  );
};

export default CartWidget;
