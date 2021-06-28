import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Posts";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>add post</button>
            </div>

            <div>
                <Field name={'newPostText'} placeholder={'add post'} component={Textarea} validate={[required, maxLength10]} />
            </div>
        </form>
    )
}

let MyPostsReduxForm = reduxForm({
    form: 'postText'
})(MyPostsForm);

const MyPosts =  React.memo((props) => {

    console.log('render yo');

    let PostsDataNew = props.PostsData.map((p) => <Post postText={p.text} likeCounter={p.likeCounter} />)

    /*   let onAddPost = () => {
           props.addPost();
       };*/

    let addPosts = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postBlock}>
                <MyPostsReduxForm onSubmit={addPosts} />
            </div>
            <div className={classes.post}>
                {PostsDataNew}
            </div>
        </div>

    )

})

export default MyPosts;