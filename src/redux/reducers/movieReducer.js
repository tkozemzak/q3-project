import {
  FETCH_MOVIES,
  SEARCH_MOVIES,
  CLICK_MOVIE,
  ADD_TO_LIST,
  REMOVE_FROM_LIST
} from '../actions/movieActions'

let initialState = {
  currentMovie: [],
  filterPhrase: '',
  searchedMovies: [],
  watchList: []
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
    case ADD_TO_LIST:
      return {
        ...state,
        watchList: [...state.watchList, action.payload].sort((a,b)=> a.id > b.id)
      }
    case REMOVE_FROM_LIST:
    let newWatchList = state.watchList.filter(item => item.id !== action.payload)
      return {
        ...state,
        watchList: [...newWatchList].sort((a,b)=> a.id > b.id)
      }
    default:
      return state
  }
}
