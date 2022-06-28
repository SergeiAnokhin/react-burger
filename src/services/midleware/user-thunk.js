import { registrationUser, loginUser, loadingUser, errorUser, logoutUser, getUserInfo, updateUserInfo, forgotUserPassword, resetUserPassword } from '../actions/user-actions';
import { URL_RESET_PASSWORD, URL_AUTH_USER } from './api';

const headers = {
  'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-type': 'application/json; charset=UTF-8'
};

export const registrationUserThunk = ({email, password, name}) => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${URL_AUTH_USER}/register`, {
      method: 'POST', 
      body: JSON.stringify({
        'email': email, 
        'password': password, 
        'name': name 
      }),
      headers: headers
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        localStorage.setItem('token', res.refreshToken);
        sessionStorage.setItem('token', res.accessToken);
        dispatch(registrationUser(res));
        dispatch(loadingUser(false));
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

export const updateUserInfoThunk = ({email, password, name}) => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${URL_AUTH_USER}/user`, {
      method: 'PATCH', 
      body: JSON.stringify({
        'email': email, 
        'password': password, 
        'name': name 
      }),
      headers: {
        ...headers,
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        dispatch(updateUserInfo(res));
        dispatch(loadingUser(false));
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

export const loginUserThunk = ({email, password}) => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${URL_AUTH_USER}/login`, {
      method: 'POST', 
      body: JSON.stringify({
        'email': email, 
        'password': password
      }),
      headers: headers
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        localStorage.setItem('token', res.refreshToken);
        sessionStorage.setItem('token', res.accessToken);
        dispatch(errorUser(false));
        dispatch(loginUser(res));
        dispatch(loadingUser(false));
        
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

export const forgotUserPasswordThunk = (email) => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${URL_RESET_PASSWORD}`, {
      method: 'POST', 
      body: JSON.stringify({
        'email': email
      }),
      headers: headers
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        dispatch(forgotUserPassword(res));
        dispatch(loadingUser(false));
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

export const resetUserPasswordThunk = ({password, token}) => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${URL_RESET_PASSWORD}/reset`, {
      method: 'POST', 
      body: JSON.stringify({
        'password': password,
        'token': token
      }),
      headers: headers
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        dispatch(resetUserPassword(res));
        dispatch(loadingUser(false));
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

export const getUserInfoThunk = () => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${URL_AUTH_USER}/user`, {
      method: 'GET',
      headers: {
        ...headers,
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        dispatch(getUserInfo(res));
        dispatch(loadingUser(false));
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('ошибка полчения данных пользователя');
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

export const logoutUserThunk = () => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(`${URL_AUTH_USER}/logout`, {
      method: 'POST', 
      body: JSON.stringify({
        'token': localStorage.getItem('token')
      }),
      headers: {
        ...headers,
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        dispatch(logoutUser());
        dispatch(loadingUser(false));
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

export const refreshTokenThunk = () => {   
  return (dispatch) => {
    return fetch(`${URL_AUTH_USER}/token`, {
      method: 'POST', 
      body: JSON.stringify({
        'token': localStorage.getItem('token')
      }),
      headers: {
        ...headers,
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        localStorage.setItem('token', res.refreshToken);
        sessionStorage.setItem('token', res.accessToken);
      })
      .catch(e => {
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

