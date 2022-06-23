import { REGISTRATION_USER, LOGIN_USER, LOGOUT_USER, REFRESH_TOKEN_USER, LOADING_USER, ERROR_USER } from "../actions/types-actions";

export const registrationUser = (value) => {
    return {type: REGISTRATION_USER, payload: value}
}

export const loginUser = (value) => {
    return {type: LOGIN_USER, payload: value}
}

export const logoutUser = (value) => {
    return {type: LOGOUT_USER, payload: value}
}

export const refreshTokenUser = (value) => {
    return {type: REFRESH_TOKEN_USER, payload: value}
}

export const loadingUser = (value) => {
    return {type: LOADING_USER, payload: value}
}

export const errorUser = (value) => {
    return {type: ERROR_USER, payload: value}
}