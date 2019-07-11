import { 
    SIGNUP_REQUEST, 
    SIGNUP_REQUEST_SUCCESS, 
    SIGNUP_REQUEST_FAIL, 
    GET_LIST_ACCOUNT_REQUEST,
    GET_LIST_ACCOUNT_SUCCESS,
    GET_LIST_ACCOUNT_FAIL
} from '../contants/ActionType'

import axios from 'axios'
import { message } from 'antd';


export function requestSignUp(){
    return(dispatch) => {
        dispatch({
            type: SIGNUP_REQUEST
        })
        return axios.request({
            url: ``,
            method : 'post'
        },
        ).then(res => {
            dispatch({
                type: SIGNUP_REQUEST_SUCCESS
            })
        }).catch(error => {
            message.error(error.response.data.message)
            dispatch({
                type: SIGNUP_REQUEST_FAIL
            })
        })
    }
}

export function requestGetListAccount(pageData){
    return(dispatch) => {
        dispatch({
            type: GET_LIST_ACCOUNT_REQUEST
        })
        return axios.request({
            url: `api/user/list`,
            method : 'get',
            params : pageData
        },
        ).then(res => {
            dispatch({
                type: GET_LIST_ACCOUNT_SUCCESS,
                payload : res.data.results
            })
        }).catch(error => {
            message.error(error.response.data.message)
            dispatch({
                type: GET_LIST_ACCOUNT_FAIL
            })
        })
    }
}