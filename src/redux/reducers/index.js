import { combineReducers } from 'redux'
import movies from './movieReducer'
import comments from './commentReducer'
import auth from './authReducer'

export default combineReducers({ movies, comments, auth })
