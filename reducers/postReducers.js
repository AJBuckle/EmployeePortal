import { LOGIN_USER } from '../actions/types';

const initialState = {
    loginStatus:false
}

export default function (state = initialState, action) {
    switch (action.type){
        case LOGIN_USER:
            return{
                ...state,
                loginStatus: true
            }
        default:
            return state;
    }
}