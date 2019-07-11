import axios from 'axios'
import {
    ACCESS_COOKIE_NAME
} from '../config.js'
import {
    Cookies
} from 'react-cookie'
import jwtDecode from 'jwt-decode'

const cookies = new Cookies()

export const setInterceptors = () => {

    const currentToken = cookies.get(ACCESS_COOKIE_NAME)

    if (currentToken !== undefined){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.get(ACCESS_COOKIE_NAME)
    }

    axios.interceptors.response.use(function (response) {
        return response
    }, function (error) {

        const originalRequest = error.config

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            var data = {
                "grant_type": "refresh_token",
                //  "refresh_token": cookies.get(REFRESH_COOKIE_NAME)
            }

            return axios.request({
                    url: 'http://localhost:8080/auth/signin',
                    method: "post",
                    data: data,
                    headers: {
                        'Authorization': ''
                    }
                })
                .then((res) => {

                    const decodedAccess = jwtDecode(res.data.accessToken)
                    
                    cookies.set(ACCESS_COOKIE_NAME, res.data.accessToken, {
                        path: '/',
                        expires: new Date(decodedAccess.exp * 10000),
                        domain: '',
                        httpOnly: false
                    })

                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken
                    originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken

                    return axios(originalRequest)

                }).catch(err => {})
        }
        return Promise.reject(error)
    })
}