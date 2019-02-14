import { LOGIN_USER, LOGOUT_USER, USE_FACE_ID, DO_NOT_USE_FACE_ID } from '../actions/types';

const initialState = {
    loginStatus:false,
    usingFaceId:false
}

export default function (state = initialState, action) {
    switch (action.type){

        case LOGIN_USER:
            return{
                // from what i understand you are returning the whole state if you dont do this it overrides the other state variables
                ...state,
                loginStatus: true
            };
        case LOGOUT_USER:
            return{
                ...state,
                loginStatus:false
            };
        case USE_FACE_ID:
            return{
                ...state,
                usingFaceId: true
            };
        case DO_NOT_USE_FACE_ID:
            return{
                ...state,
                usingFaceId:false

            };

        default:
            return state;
    }
}