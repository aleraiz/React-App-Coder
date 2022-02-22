import React from 'react';
import './LogoHeader.scss';
import { Link } from 'react-router-dom';

const LogoHeader = () => {
  return (
  <div className='div-LogoHeader'>
      <Link to="/"><h1>CEMUA</h1></Link>
  </div>
  );
};

export default LogoHeader;
