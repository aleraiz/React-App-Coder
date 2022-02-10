import React from 'react';
import './MenuHeader.scss';

const MenuHeader = () => {
  return (
  <div className='MenuHeaderDiv'>
      <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">Contacto</a></li>
      </ul>
  </div>
  );
};

export default MenuHeader;
