const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default:
            return state;

    }
};

// just return object for dispatch
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;