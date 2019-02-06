import { FETCH_POST, LOGIN_USER } from '../actions/types';

const initialState = {
    items:[],
    item:{},
    loginStatus:false
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_POST:
            return {
                ...state,
                items:action.payload
            }
        case LOGIN_USER:
            console.log("in LOGIN_USER")
            return{
                ...state,
                loginStatus: true
            }
        default:
            return state;
    }
}