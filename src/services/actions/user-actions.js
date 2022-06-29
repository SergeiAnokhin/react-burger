import {
  REGISTRATION_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOADING_USER,
  ERROR_USER,
  GET_USER_INFO,
  UPDATE_USER_INFO,
  FORGOT_USER_PASSWORD,
  RESET_USER_PASSWORD
} from '../actions/types-actions';

export const registrationUser = (value) => ({
  type: REGISTRATION_USER,
  payload: value
});

export const loginUser = (value) => ({
  type: LOGIN_USER,
  payload: value
});

export const forgotUserPassword = (value) => ({
  type: FORGOT_USER_PASSWORD,
  payload: value
});

export const resetUserPassword = (value) => ({
  type: RESET_USER_PASSWORD,
  payload: value
});

export const getUserInfo = (value) => ({
  type: GET_USER_INFO,
  payload: value
});

export const updateUserInfo = (value) => ({
  type: UPDATE_USER_INFO,
  payload: value
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const loadingUser = (value) => ({
  type: LOADING_USER,
  payload: value
});

export const errorUser = (value) => ({
  type: ERROR_USER,
  payload: value
});
