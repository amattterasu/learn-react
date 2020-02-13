import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 54},
        {id: 2, message: 'How are you?', likeCount: 42},
        {id: 3, message: 'It\'s my first post!', likeCount: 98},
        {id: 4, message: 'Zaboosti', likeCount: 24}
    ],
};

it('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('NewText');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator('NewText');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[4].message).toBe('NewText');
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect `, () => {
    //1. test data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});