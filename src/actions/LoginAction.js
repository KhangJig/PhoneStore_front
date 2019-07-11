import { 
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS, 
    LOGIN_REQUEST_FAIL 
} from '../contants/ActionType'

import {
    ACCESS_COOKIE_NAME
} from '../config'

import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { message } from 'antd'

export function requestLogin(dataLogin, props){
    return(dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })
        return axios.request({
            url: `/auth/signin`,
            method : 'post',
            data: dataLogin
        },
        ).then(res => {

            const decodedAccess = jwtDecode(res.data.accessToken)

            // localStorage.setItem(USER_NAME, JSON.stringify(decodedAccess.sub))

            props.cookies.set(ACCESS_COOKIE_NAME, res.data.accessToken, {
                path: '/',
                expires: new Date(decodedAccess.exp * 10000),
                domain: '',
                httpOnly: false
            })
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`

            dispatch({
                type: LOGIN_REQUEST_SUCCESS
            })
        }).catch(error => {
            message.error(error.response.data.message)
            dispatch({
                type: LOGIN_REQUEST_FAIL
            })
        })
    }
}