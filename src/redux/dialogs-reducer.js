const SEND_MESSAGE = 'SEND-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            };

        default:
            return state;
    }
};

// just return object for dispatch
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;