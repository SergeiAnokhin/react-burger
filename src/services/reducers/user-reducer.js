import { REGISTRATION_USER, LOGIN_USER, LOGOUT_USER, REFRESH_TOKEN_USER, LOADING_USER, ERROR_USER } from "../actions/types-actions";

const initialState = {
    name: '',
    email: '',
    loading: false,
    error: false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
      case REGISTRATION_USER:
        return {...state, name: action.payload.user.name, email: action.payload.user.email}
      case LOGIN_USER:
        return {...state, name: action.payload.user.name, email: action.payload.user.email}
      case LOGOUT_USER:
        return state
      case REFRESH_TOKEN_USER:
        return state
      case LOADING_USER:
        return {...state, loading: action.payload}
      case ERROR_USER:
        return {...state, error: action.payload}
      default:
        return state;
    }
  }