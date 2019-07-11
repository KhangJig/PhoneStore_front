import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import rootReducer from './reducer/reducer'

export const history = createBrowserHistory()

const initialState = {}
const middleware = [
  thunk,
  routerMiddleware(history)
]
const composedEnhancers = compose(
    applyMiddleware(...middleware)
  )

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)


export default store