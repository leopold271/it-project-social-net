import React from 'react';
import logo from '../../logo-social.png';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <img src={logo} alt=''/>
            <div className={classes.loginBlock}>

                <div>
                    {props.isAuth
                        ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to='/login'>Login</NavLink>}
                </div>

            </div>
        </div>

    )
}

export default Header;