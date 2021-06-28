const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    PostsData: [
        {id: 1, text: 'my 1st post', likeCounter: 2},
        {id: 2, text: 'it-kamasutra', likeCounter: 44},
        {id: 3, text: 'what are these voices?', likeCounter: 22},
        {id: 4, text: 'hey!', likeCounter: 41},
        {id: 5, text: ' i am new', likeCounter: 0}
    ],
    newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                text: state.newPostText,
                likeCounter: 0
            };
            return {
                ...state,
                newPostText: '',
                PostsData: [...state.PostsData, newPost]
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default :
            return state;
    }
};

export default profileReducer;