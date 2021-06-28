import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        PostsData: state.ProfilePage.PostsData
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;