import React from 'react';
import classes from './Posts.module.css';

const Post = (props) => {
    return(
        <div>
            <img className={classes.ava}
                 src='https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg'
                 alt='ava'/>
            {props.postText}
            <div>
                <div>
                    {props.likeCounter}
                    <button>like</button>
                </div>



            </div>
        </div>
    )
}


export default Post;
