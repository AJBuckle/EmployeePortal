import {  LOGIN_USER, LOGOUT_USER, USE_FACE_ID, DO_NOT_USE_FACE_ID } from './types';


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

export const userWillUseFaceID = () => dispatch =>{
    dispatch({
        type:USE_FACE_ID
    })
}

export const userWillNotUseFaceID = () => dispatch =>{
    dispatch({
        type:DO_NOT_USE_FACE_ID
    })
}
