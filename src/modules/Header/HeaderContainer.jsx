import React from 'react';
import logo from '../../logo-social.png';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
   return (
      <div className={classes.header}>
         <img src={logo} alt='' />
          <div className={classes.loginBlock}>
              <NavLink to='/login'>Login</NavLink>
          </div>
      </div>

   )
}

export default Header;