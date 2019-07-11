import { 
    GET_LIST_POKEMON_REQUEST, 
    GET_LIST_POKEMON_REQUEST_SUCCESS, 
    GET_LIST_POKEMON_REQUEST_FAIL 
} from '../contants/ActionType'

import axios from 'axios'
import { message } from 'antd';


export function requestGetListPokemon(){
    return(dispatch) => {
        dispatch({
            type: GET_LIST_POKEMON_REQUEST
        })
        return axios.request({
            url: `https://pokeapi.co/api/v2/pokemon`,
            method : 'get'
        },
        ).then(res => {
            dispatch({
                type: GET_LIST_POKEMON_REQUEST_SUCCESS,
                payload : res.data.results
            })
        }).catch(error => {
            message.error(error.response.data.message)
            dispatch({
                type: GET_LIST_POKEMON_REQUEST_FAIL
            })
        })
    }
}