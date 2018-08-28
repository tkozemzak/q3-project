import {
  FETCH_MOVIES,
  SEARCH_MOVIES,
  CLICK_MOVIE
} from '../actions/movieActions'

let initialState = {
  currentMovie: [],
  filterPhrase: '',
  searchedMovies: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        currentMovie: [action.payload]
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        searchedMovies: [action.payload]
      }
    case CLICK_MOVIE:
      return {
        ...state,
        currentMovie: [action.payload],
        searchedMovies: []
      }
    default:
      return state
  }
}
