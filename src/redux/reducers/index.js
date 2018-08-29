import { combineReducers } from 'redux'
import movies from './movieReducer'
import comments from './commentReducer'

export default combineReducers({ movies, comments })
