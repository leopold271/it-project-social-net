import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Posts";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <button>add post</button>
                <textarea></textarea>
            </div>
            <div>
                <Post postText='hey' likeCounter='3'/>
                <Post postText='hi' likeCounter='4'/>
                <Post postText='yo' likeCounter='22'/>
                <Post postText='yo' likeCounter='1'/>
                <Post postText='yo' likeCounter='0'/>
            </div>
        </div>

    )
}

export default MyPosts;