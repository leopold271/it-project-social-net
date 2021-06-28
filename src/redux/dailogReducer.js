const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                text: action.newMessageText
            };
            return {
                ...state,
                MessageData: [...state.MessageData, newMessage],
            };
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});


export default dialogReducer;