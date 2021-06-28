import profileReducer from "./profileReducer";
import dialogReducer from "./dailogReducer";
import recentFriendsReducer from "./recentFriendsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _callSubscriber() {
        console.log('State has been changed');
    },
    _state: {

        DialogPage: {
            DialogData: [
                {id: 1, name: 'Leo'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Lexa'},
                {id: 5, name: 'Dimas'},
            ],
            MessageData: [
                {id: 1, text: 'hey'},
                {id: 2, text: 'hi'},
                {id: 3, text: 'yo'},
                {id: 4, text: 'yo'},
                {id: 5, text: 'yo'}
            ],

            newMessageText: 'Anything new?',
        },

        ProfilePage: {
            PostsData: [
                {id: 1, text: 'my 1st post', likeCounter: 2},
                {id: 2, text: 'it-kamasutra', likeCounter: 44},
                {id: 3, text: 'what are these voices?', likeCounter: 22},
                {id: 4, text: 'hey!', likeCounter: 41},
                {id: 5, text: ' i am new', likeCounter: 0}
            ],
            newPostText: 'it-kamasutra'
        },


        RecentFriendsData: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Lexa'},
            {id: 3, name: 'Dimas'}
        ]
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogPage = dialogReducer(this._state.DialogPage, action);
        this._state.RecentFriendsData = recentFriendsReducer(this._state.RecentFriendsData, action);

        this._callSubscriber(this._state);

    }
}


export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        text: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        text: text
    }
}

export default store;