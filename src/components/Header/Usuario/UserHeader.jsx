import React from 'react';
import './UsuerHeader.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';


const UserHeader = () => {
  return (
  <div className='UserHeaderDiv'>
      <ul>
          <li><a href=""><FontAwesomeIcon icon={faUser}/></a></li>
          <li><a href=""><FontAwesomeIcon icon={faHeart} /></a></li>
          <CartWidget/>
      </ul>
  </div>
  );
};

export default UserHeader;
