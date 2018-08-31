import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT
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

    case DELETE_COMMENT:
    let newCommentList = state.comments.filter(item => item.id !== action.payload)
      return {
        comments: [...newCommentList].sort((a,b)=> a.id > b.id)
      }
    default:
      return state
  }
}
