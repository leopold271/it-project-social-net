import profileReducer, {addPost, deletePost} from './profileReducer';

let state = {
    PostsData: [
        {id: 1, text: 'my 1st post', likeCounter: 2},
        {id: 2, text: 'it-kamasutra', likeCounter: 44},
        {id: 3, text: 'what are these voices?', likeCounter: 22},
        {id: 4, text: 'hey!', likeCounter: 41},
        {id: 5, text: ' i am new', likeCounter: 0}
    ]
};

it('length of postdata should be 5', () => {
    let action = addPost('yo');
    let newState = profileReducer(state, action);

   expect(newState.PostsData.length).toBe(6) ;


});

it('length of postdata should be correct', () => {
    let action = addPost('yo');
    let newState = profileReducer(state, action);

   expect(newState.PostsData[5].text).toBe('yo') ;

});

it('after deletion of post PostsData should decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

   expect(newState.PostsData.length).toBe(4) ;

});

it('after deletion of post, if id is incorrect, length shuould be the same', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

   expect(newState.PostsData.length).toBe(5) ;
   
});



