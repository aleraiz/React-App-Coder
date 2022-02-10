import React from 'react';
import LogoHeader from './Logo/LogoHeader';
import MenuHeader from './Menu/MenuHeader';
import UserHeader from './Usuario/UserHeader';
import '../Header/_Header.scss';

const Header = () => {
  return (
   <div className='bg'>
       <LogoHeader/>
       <MenuHeader/>
       <UserHeader/>
  </div>
  );
};

export default Header;
