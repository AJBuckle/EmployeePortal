import { FETCH_POSTS, NEW_POST, LOGIN_USER } from './types';


export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(retrievedData => dispatch({
            type:FETCH_POSTS,
            payload:retrievedData
        }))
}

export const newPost = data => dispatch => {
    dispatch({
        type: NEW_POST,
        payload:data
    })
}

export const changeStatus = () => dispatch =>{
    console.log("In change status")
    dispatch({
        type:LOGIN_USER
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