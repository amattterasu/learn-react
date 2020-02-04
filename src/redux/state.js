const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 54},
                {id: 2, message: 'How are you?', likeCount: 42},
                {id: 3, message: 'It\'s my first post!', likeCount: 98},
                {id: 4, message: 'Zaboosti', likeCount: 24}
            ],
            newPostText: 'Some text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Martin'},
                {id: 3, name: 'Kylo Ren'},
                {id: 4, name: 'Renault Logan'},
                {id: 5, name: 'Another Person'},
                {id: 6, name: 'Inc'},
            ],
            messages: [
                {id: 1, message: 'Hello World!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Kylo Ren'},
                {id: 4, message: 'Zaboosti'}
            ]
        },
        sitebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;
window.store = store;
