import { 
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS, 
    LOGIN_REQUEST_FAIL 
} from '../contants/ActionType'


const initialState = {
    isLoadingLogin: false
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoadingLogin: true
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingLogin: false
            }
        case LOGIN_REQUEST_FAIL:
            return {
                ...state,
                isLoadingLogin: false
            }
        default:
            return state;
    }
}


export default loginReducer