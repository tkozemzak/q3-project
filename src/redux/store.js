import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let middleware = [thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleware))
