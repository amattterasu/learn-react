const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        default:
            return state;
    }
};

// just return object for dispatch
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;