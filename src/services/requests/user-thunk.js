import {
  registrationUser,
  loginUser,
  loadingUser,
  errorUser,
  logoutUser,
  getUserInfo,
  updateUserInfo,
  forgotUserPassword,
  resetUserPassword
} from '../actions/user-actions';
import { setCookie, getCookie, deleteCookie } from '../../utils/cookie';
import { API_URL } from './api';

const headers = {
  'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-type': 'application/json; charset=UTF-8'
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const registrationUserThunk =
  ({ email, password, name }) =>
  (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
      headers: headers
    })
      .then(checkResponse)
      .then((res) => {
        localStorage.setItem('token', res.refreshToken);
        sessionStorage.setItem('token', res.accessToken);
        setCookie('token', res.accessToken);
        dispatch(registrationUser(res));
      })
      .catch((e) => {
        dispatch(errorUser(true));
        console.log('Ошибка получения данных с сервера', e.message);
      })
      .finally(() => {
        dispatch(loadingUser(false));
      });
  };

export const updateUserInfoThunk =
  ({ email, password, name }) =>
  (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${API_URL}/auth/user`, {
      method: 'PATCH',
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
      headers: {
        ...headers,
        Authorization: getCookie('token')
      }
    })
      .then(checkResponse)
      .then((res) => {
        dispatch(updateUserInfo(res));
      })
      .catch((e) => {
        dispatch(errorUser(true));
        console.log('Ошибка получения данных с сервера', e.message);
      })
      .finally(() => {
        dispatch(loadingUser(false));
      });
  };

export const loginUserThunk =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: headers
    })
      .then(checkResponse)
      .then((res) => {
        localStorage.setItem('token', res.refreshToken);
        sessionStorage.setItem('token', res.accessToken);
        setCookie('token', res.accessToken);
        dispatch(errorUser(false));
        dispatch(loginUser(res));
      })
      .catch((e) => {
        dispatch(errorUser(true));
        console.log('Ошибка получения данных с сервера', e.message);
      })
      .finally(() => {
        dispatch(loadingUser(false));
      });
  };

export const forgotUserPasswordThunk = (email) => (dispatch) => {
  dispatch(loadingUser(true));
  return fetch(`${API_URL}/password-reset`, {
    method: 'POST',
    body: JSON.stringify({
      email: email
    }),
    headers: headers
  })
    .then(checkResponse)
    .then((res) => {
      dispatch(forgotUserPassword(res));
    })
    .catch((e) => {
      dispatch(errorUser(true));
      console.log('Ошибка получения данных с сервера', e.message);
    })
    .finally(() => {
      dispatch(loadingUser(false));
    });
};

export const resetUserPasswordThunk =
  ({ password, token }) =>
  (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${API_URL}/password-reset/reset`, {
      method: 'POST',
      body: JSON.stringify({
        password: password,
        token: token
      }),
      headers: headers
    })
      .then(checkResponse)
      .then((res) => {
        dispatch(resetUserPassword(res));
      })
      .catch((e) => {
        dispatch(errorUser(true));
        console.log('Ошибка получения данных с сервера', e.message);
      })
      .finally(() => {
        dispatch(loadingUser(false));
      });
  };

export const getUserInfoThunk = () => (dispatch) => {
  dispatch(loadingUser(true));
  return fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: getCookie('token')
    }
  })
    .then(checkResponse)
    .then((res) => {
      dispatch(getUserInfo(res));
    })
    .catch((e) => {
      dispatch(errorUser(true));
      console.log('ошибка полчения данных пользователя');
      console.log('Ошибка получения данных с сервера', e.message);
    })
    .finally(() => {
      dispatch(loadingUser(false));
    });
};

export const logoutUserThunk = () => (dispatch) => {
  dispatch(loadingUser(true));
  return fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    body: JSON.stringify({
      token: localStorage.getItem('token')
    }),
    headers: {
      ...headers,
      Authorization: getCookie('token')
    }
  })
    .then(checkResponse)
    .then((res) => {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      deleteCookie('token');
      dispatch(logoutUser());
    })
    .catch((e) => {
      dispatch(errorUser(true));
      console.log('Ошибка получения данных с сервера', e.message);
    })
    .finally(() => {
      dispatch(loadingUser(false));
    });
};

export const refreshTokenThunk = () => (dispatch) =>
  fetch(`${API_URL}/auth/token`, {
    method: 'POST',
    body: JSON.stringify({
      token: localStorage.getItem('token')
    }),
    headers: {
      ...headers,
      Authorization: localStorage.getItem('token')
    }
  })
    .then(checkResponse)
    .then((res) => {
      localStorage.setItem('token', res.refreshToken);
      sessionStorage.setItem('token', res.accessToken);
      setCookie('token', res.accessToken);
    })
    .catch((e) => {
      console.log('Ошибка получения данных с сервера', e.message);
    });
