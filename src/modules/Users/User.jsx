import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";


const Users = ({ user, followingInProgress, deleteSubscription, addSubscription,  ...props }) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={classes.ava} alt='' />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                deleteSubscription(user.id);
                            }}> Unfollow </button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                addSubscription(user.id);
                            }}> Follow </button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {'u.location.country'}
                    </div>
                    <div>
                        {'u.location.city'}
                    </div>
                </span>
            </span>
        </div>
    )
};

export default Users;