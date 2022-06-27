import { REGISTRATION_USER, LOGIN_USER, LOGOUT_USER, REFRESH_TOKEN_USER, LOADING_USER, ERROR_USER, GET_USER_INFO, UPDATE_USER_INFO, FORGOT_USER_PASSWORD, RESET_USER_PASSWORD } from '../actions/types-actions';

export const registrationUser = (value) => {
  return {type: REGISTRATION_USER, payload: value};
};

export const loginUser = (value) => {
  return {type: LOGIN_USER, payload: value};
};

export const forgotUserPassword = (value) => {
  return {type: FORGOT_USER_PASSWORD, payload: value};
};

export const resetUserPassword = (value) => {
  return {type: RESET_USER_PASSWORD, payload: value};
};

export const getUserInfo = (value) => {
  return {type: GET_USER_INFO, payload: value};
};

export const updateUserInfo = (value) => {
  return {type: UPDATE_USER_INFO, payload: value};
};

export const logoutUser = () => {
  return {type: LOGOUT_USER};
};

export const refreshTokenUser = (value) => {
  return {type: REFRESH_TOKEN_USER, payload: value};
};

export const loadingUser = (value) => {
  return {type: LOADING_USER, payload: value};
};

export const errorUser = (value) => {
  return {type: ERROR_USER, payload: value};
};