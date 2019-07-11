import {
    GET_LIST_POKEMON_REQUEST,
    GET_LIST_POKEMON_REQUEST_SUCCESS,
    GET_LIST_POKEMON_REQUEST_FAIL
} from '../contants/ActionType'


const initialState = {
    isLoadingGetPoke: true,
    pokeList: []
}


const pokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_POKEMON_REQUEST:
            return {
                ...state,
                isLoadingGetPoke:true,
            }
        case GET_LIST_POKEMON_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingGetPoke:false,
                pokeList: action.payload
            }
        case GET_LIST_POKEMON_REQUEST_FAIL:
            return {
                ...state,
                isLoadingGetPoke:false
            }
        default:
            return state;
    }
}


export default pokeReducer