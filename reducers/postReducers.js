import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

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

        case LOGOUT_USER:
            return{
                ...state,
                loginStatus:false
            }
        default:
            return state;
    }
}