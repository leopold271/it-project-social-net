import React from 'react';
import logo from '../../logo-social.png';
import classes from './Header.module.css';

const Header = () => {
   return (
      <div className={classes.header}>
         <img src={logo} alt='' />
      </div>
   )
}

export default Header;