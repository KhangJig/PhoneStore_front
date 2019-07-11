import {
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAIL,
    GET_LIST_ACCOUNT_REQUEST,
    GET_LIST_ACCOUNT_SUCCESS,
    GET_LIST_ACCOUNT_FAIL
} from '../contants/ActionType'


const initialState = {
    isLoadingSignUp: false,
    isLoadingGetList: false,
    listAccount : []
}


const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoadingSignUp: true
            }
        case SIGNUP_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingSignUp: false
            }
        case SIGNUP_REQUEST_FAIL:
            return {
                ...state,
                isLoadingSignUp: false
            }
        case GET_LIST_ACCOUNT_REQUEST:
            return {
                ...state,
                isLoadingGetList: true
            }
        case GET_LIST_ACCOUNT_SUCCESS:
            return {
                ...state,
                listAccount: action.payload.contents,
                isLoadingGetList: false
            }
        case GET_LIST_ACCOUNT_FAIL:
            return {
                ...state,
                isLoadingGetList: false
            }
        default:
            return state;
    }
}


export default signUpReducer