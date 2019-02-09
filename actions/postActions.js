import {  LOGIN_USER, LOGOUT_USER } from './types';


export const setUserToLoggedIn = () => dispatch =>{
    dispatch({
        type:LOGIN_USER
    })
}
export const setUserToLoggedOut = () => dispatch =>{
    dispatch({
        type:LOGOUT_USER
    })
}

// try removing the first or second dispatch
// this is the changed dispatch
// probally not using this function
// export const newReduced = data => ({
//     type: SECOND_REDUCER,
//     payload:data
// })

// export const newReduced = data => dispatch => {
//     dispatch({
//         type: SECOND_REDUCER,
//         payload:data
//     })
// }