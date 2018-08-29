import axios from 'axios'

export const FETCH_MOVIES = "FETCH_MOVIES"
export const SEARCH_MOVIES = "SEARCH_MOVIES"
export const CLICK_MOVIE = "CLICK_MOVIE"
export const ADD_TO_LIST = "ADD_TO_LIST"
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST"






export const fetchMovies = () => {

  return dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/135397?api_key=715f37a0ec105ebee8ddc4d7bb3e603a`)
      .then(response => dispatch ({
        type: FETCH_MOVIES,
        payload: response.data
      }))
  }
}

export const searchMovies = phrase => {
  return dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=715f37a0ec105ebee8ddc4d7bb3e603a&language=en-US&query=${phrase}&page=1
`).then(response => dispatch ({
        type: SEARCH_MOVIES,
        payload: response.data
      }))
  }
}

export const clickMovie = (id) => {
  return dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=715f37a0ec105ebee8ddc4d7bb3e603a`)
    .then(response => dispatch ({
      type: CLICK_MOVIE,
      payload: response.data
    }))
}
}

export const addToList = (id) => {
  console.log('addToList triggered');
  return dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=715f37a0ec105ebee8ddc4d7bb3e603a`)
      .then(response => dispatch ({
        type: ADD_TO_LIST,
        payload: response.data
      }))
  }
}

export const removeFromList = (id) => {
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_LIST,
      payload: id
    })
  }
}
