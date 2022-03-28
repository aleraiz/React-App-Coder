import React from 'react';
import './UserHeader.scss'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';


const UserHeader = () => {
  return (
  <div className='UserHeaderDiv'>
      <ul>
          <li><Link to="/"><FontAwesomeIcon icon={faUser}/></Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faHeart}/></Link></li>
          <CartWidget/>
      </ul>
  </div>
  );
};

export default UserHeader;
