const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// let initialState = {
//     users: [
//         {
//             id: 1,
//             followed: false,
//             fullName: 'Andrey',
//             status: 'I am a boss',
//             location: {city: 'Tomsk', country: 'Russia'},
//             photoUrl: 'https://cdn24.img.ria.ru/images/155231/05/1552310590_0:405:2048:1557_600x0_80_0_0_880832a40040dfcb928722ae168cc719.jpg'
// },
//         {
//             id: 2,
//             followed: true,
//             fullName: 'Martin',
//             status: 'I am a looser',
//             location: {city: 'Moscow', country: 'Russia'},
//             photoUrl: 'https://g4.delphi.lv/images/pix/676x385/DnnPaIuKh_k/kakis-mele-laizities-50902459.jpg'
//         },
//         {
//             id: 3,
//             followed: false,
//             fullName: 'Dmitry',
//             status: 'I am boss too too',
//             location: {city: 'Tomsk', country: 'Russia'},
//             photoUrl: 'https://icdn.lenta.ru/images/2019/10/06/13/20191006135047104/pic_bf6cef2550e28d7298e7b7d441b3cdd6.jpg'
//         }
//     ]
// };

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
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
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;