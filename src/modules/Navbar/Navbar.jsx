import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
//import RecentFriend from "./RecentFriend/RecentFriend";

const Navbar = (props) => {

    //let RecentFriendsDataNew = props.RecentFriendsData.map((rf) => <RecentFriend name={rf.name}/>)
    return (
        <div className={classes.navbar}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends'>Friends</NavLink>
            </div>

            {/*<div className={classes.item}>
                {RecentFriendsDataNew}
            </div>*/}
        </div>
    );
}

export default Navbar;