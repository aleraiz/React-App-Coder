import React from 'react';
import './MenuHeader.scss';
import { Link } from 'react-router-dom';

const MenuHeader = () => {
  return (
  <div className='MenuHeaderDiv'>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categoria/prendas">Prendas</Link></li>
          <li><Link to="/categoria/accesorios">Accesorios</Link></li>
          <li><Link to="/categoria/zapatos">Zapatos</Link></li>
      </ul>
  </div>
  );
};

export default MenuHeader;
