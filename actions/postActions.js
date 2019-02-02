import { FETCH_POST, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(retrivedData => dispatch({
                type:FETCH_POST,
                payload:retrivedData
            }))
}
