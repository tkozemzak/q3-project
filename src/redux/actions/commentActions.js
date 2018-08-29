import axios from 'axios'

export const ADD_COMMENT = "ADD_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const FETCH_COMMENTS = "FETCH_COMMENTS"

export const fetchComments = () => {

  return dispatch => {
    axios.get(`http://localhost:8000/comments`)
      .then(response => dispatch ({
        type: FETCH_COMMENTS,
        payload: response.data
      }))
  }
}

export const addComment = (comment) => {
  console.log('comment', comment);
  return dispatch => {
    axios.post(`http://localhost:8000/comments`)
      .then(response => dispatch ({
        type: FETCH_COMMENTS,
        payload: comment
      }))
  }
}
export const removeComment = (comment) => {
  return dispatch => {
    dispatch({
      type: REMOVE_COMMENT,
      payload: comment
    })
  }
}
