import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  FETCH_USER
} from '../actions/authActions'

let initialState = {
  isLoading: false,
  user: {},
  showLoginError: false,
  showSignupError: false
};

export default(state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {...state, isLoading: true}
    case USER_LOGIN_SUCCESS:
      return {...state, isLoading: false, user: action.payload}
    case USER_LOGIN_FAILED:
      return {...state, isLoading: false, showLoginError: true}
    case USER_SIGNUP_PENDING:
      return {...state, isLoading: true}
    case USER_SIGNUP_SUCCESS:
      return {...state, isLoading: false}
    case USER_SIGNUP_FAILED:
      return {...state, isLoading: false, showSignupError: true}
    case USER_LOGOUT:
      return {...state, user: {}}
    case FETCH_USER:
      console.log('USER',action.payload)
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
