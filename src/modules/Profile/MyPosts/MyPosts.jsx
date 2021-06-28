import React from 'react';
import foneimage from '../../../mountains-under-mist-morning-amazing-260nw-1725825019.webp';
import ava from '../../../quad.png';
import classes from './Profile.module.css';

const Profile = () => {
   return (
      <div className={classes.content}>
         <div>
            <img src={foneimage} alt='phoneimage' />
         </div>
         <div>
            <img className={classes.ava} src='https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg' alt='ava' />
            + description
         </div>
         <div>
            My posts
            <div>
               new post
            </div>
            <div>
               <div>
                  post 1
               </div>
               <div>
                  post 2
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile;