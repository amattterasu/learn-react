let renderEntireTree = () => {
    console.log('State changed')
};

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer; //наблюдатель
};

export default state;

