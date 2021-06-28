import { profileApi, userApi as usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    PostsData: [
        { id: 1, text: 'my 1st post', likeCounter: 2 },
        { id: 2, text: 'it-kamasutra', likeCounter: 44 },
        { id: 3, text: 'what are these voices?', likeCounter: 22 },
        { id: 4, text: 'hey!', likeCounter: 41 },
        { id: 5, text: ' i am new', likeCounter: 0 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                text: action.newPostText,
                likeCounter: 0
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost]
            }
        }
        case DELETE_POST:
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {

    let response = await usersApi.getProfile(userId)

    dispatch(setUserProfile(response.data));


}

export const getUserStatus = (userId) => async (dispatch) => {

    let response = await profileApi.getStatus(userId)

    dispatch(setUserStatus(response.data));


}

export const updateUserStatus = (status) => async (dispatch) => {

    let response = await profileApi.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }


}

export default profileReducer;