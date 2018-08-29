import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/commentActions'

let initialState = {
  comments: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: [action.payload].sort((a,b)=> a.id > b.id)
      }

    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, ...action.payload].sort((a,b)=> a.id > b.id)
      }

    case REMOVE_COMMENT:
    let newWatchList = state.watchList.filter(item => item.id !== action.payload)
      return {
        ...state,
        watchList: [...newWatchList].sort((a,b)=> a.id > b.id)
      }
    default:
      return state
  }
}
