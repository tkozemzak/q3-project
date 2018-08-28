import axios from 'axios'

export const FETCH_MOVIES = "FETCH_MOVIES"
export const SEARCH_MOVIES = "SEARCH_MOVIES"
export const CLICK_MOVIE = "CLICK_MOVIE"






export const fetchMovies = () => {

  return dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/${Math.floor((Math.random() * 500) + 1)}?api_key=715f37a0ec105ebee8ddc4d7bb3e603a
`)
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
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=715f37a0ec105ebee8ddc4d7bb3e603a
`)
    .then(response => dispatch ({
      type: CLICK_MOVIE,
      payload: response.data
    }))
}
}
