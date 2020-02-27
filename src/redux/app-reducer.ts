import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    // dispatch(somethingElse());
    // dispatch(somethingElse());
    // dispatch(somethingElse());
    Promise.all([promise]) // берем все промисы диспатчей выше и делаем дела
        .then(() => {
        dispatch(initializedSuccess());
    })
};

export default appReducer;