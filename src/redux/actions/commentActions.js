import axios from 'axios'

export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
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

export const addComment = (newComment) => {
  console.log('comment', newComment);
  return dispatch => {
    axios.post(`http://localhost:8000/comments`, newComment)
      .then(response => dispatch ({
        type: ADD_COMMENT,
        payload: response.data
      })).then(()=>{
        axios.get(`http://localhost:8000/comments`)
          .then(response => dispatch ({
            type: FETCH_COMMENTS,
            payload: response.data
          }))

      })
  }
}

export const deleteComment = (id) => {
  return dispatch => {
    axios.delete(`http://localhost:8000/comments/${id}`)
      .then(response => dispatch ({
        type: DELETE_COMMENT,
        payload: id
      })).then(()=>{
        axios.get(`http://localhost:8000/comments`)
          .then(response => dispatch ({
            type: FETCH_COMMENTS,
            payload: response.data
          }))

      })
  }
}



//
