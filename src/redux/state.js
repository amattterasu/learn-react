import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 54},
                {id: 2, message: 'How are you?', likeCount: 42},
                {id: 3, message: 'It\'s my first post!', likeCount: 98},
                {id: 4, message: 'Zaboosti', likeCount: 24}
            ],
            newPostText: ''
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
