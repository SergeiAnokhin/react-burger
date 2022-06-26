import { REGISTRATION_USER, LOGIN_USER, LOGOUT_USER, REFRESH_TOKEN_USER, LOADING_USER, ERROR_USER, GET_USER_INFO, UPDATE_USER_INFO } from "../actions/types-actions";

const initialState = {
    name: '',
    email: '',
    password: '',
    loading: false,
    auth: false,
    error: false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
      case REGISTRATION_USER:
        return {...state, name: action.payload.user.name, email: action.payload.user.email, auth: action.payload.success}
      case LOGIN_USER:
        return {...state, name: action.payload.user.name, email: action.payload.user.email, auth: action.payload.success}
      case GET_USER_INFO:
        return {...state, name: action.payload.user.name, email: action.payload.user.email, auth: action.payload.success}
      case UPDATE_USER_INFO:
        return {...state, name: action.payload.user.name, email: action.payload.user.email, auth: action.payload.success}
      case LOGOUT_USER:
        return {...state, name: '', email: '', auth: false}
      case REFRESH_TOKEN_USER:
        return {...state, name: state.name, email: state.email, auth: action.payload.success}
      case LOADING_USER:
        return {...state, loading: action.payload}
      case ERROR_USER:
        return {...state, error: action.payload}
      default:
        return state;
    }
  }