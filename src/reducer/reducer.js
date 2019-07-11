import { combineReducers } from 'redux'

import pokeReducer from './pokeReducer'
import loginReducer from './loginReducer'
import signUpReducer from './userReducer'

const rootReducer = combineReducers({
    loginReducer,
    pokeReducer,
    signUpReducer
})

export default rootReducer