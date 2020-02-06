const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Andrey',
            status: 'I am a boss',
            location: {city: 'Tomsk', country: 'Russia'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Martin',
            status: 'I am a looser',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am boss too too',
            location: {city: 'Tomsk', country: 'Russia'}
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                user: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                user: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
};

// just return object for dispatch
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (user) => ({type: SET_USERS, user});

export default usersReducer;