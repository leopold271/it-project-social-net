import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Posts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/store";



const MyPosts = (props) => {

    let PostsDataNew = props.ProfilePage.PostsData.map((p) => <Post postText={p.text} likeCounter={p.likeCounter}/>)



    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        //props.updatePostText(text)
        props.dispatch(updatePostTextActionCreator(text));
    };

    return (
        <div>
            My posts
            <div className={classes.postBlock}>
                <button onClick={addPost}>add post</button>
                <div>
                    <textarea onChange={onPostChange} value={props.ProfilePage.newPostText}/>
                </div>
            </div>
            <div className={classes.post}>
                {PostsDataNew}
            </div>
        </div>

    )
}

export default MyPosts;