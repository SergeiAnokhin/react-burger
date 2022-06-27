import { registrationUser, loginUser, loadingUser, errorUser, logoutUser, getUserInfo, updateUserInfo, forgotUserPassword, resetUserPassword } from '../actions/user-actions';
import { URL_LOGIN, URL_REGISTRATION, URL_USER, URL_LOGOUT, URL_TOKEN, URL_FORGOT_PASSWORD, URL_RESET_PASSWORD } from './api';

export const registrationUserThunk = ({email, password, name}) => {   
  return (dispatch) => {
    dispatch(loadingUser(true));
    return fetch(URL_REGISTRATION, {
      method: 'POST', 
      body: JSON.stringify({
        'email': email, 
        'password': password, 
        'name': name 
      }),
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('Registration================');
        console.log(res);
        console.log('Registration================');
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
    return fetch(URL_USER, {
      method: 'PATCH', 
      body: JSON.stringify({
        'email': email, 
        'password': password, 
        'name': name 
      }),
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('UpdateUser================');
        console.log(res);
        console.log('UpdateUser================');
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
    return fetch(URL_LOGIN, {
      method: 'POST', 
      body: JSON.stringify({
        'email': email, 
        'password': password
      }),
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('Login================');
        console.log(res);
        console.log('Login================');
        localStorage.setItem('token', res.refreshToken);
        sessionStorage.setItem('token', res.accessToken);
        dispatch(loginUser(res));
        dispatch(loadingUser(false));
        dispatch(errorUser(false));
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
    return fetch(URL_FORGOT_PASSWORD, {
      method: 'POST', 
      body: JSON.stringify({
        'email': email
      }),
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('ForgotPassword================');
        console.log(res);
        console.log('ForgotPassword================');
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
    return fetch(URL_RESET_PASSWORD, {
      method: 'POST', 
      body: JSON.stringify({
        'password': password,
        'token': token
      }),
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('ResetPassword================');
        console.log(res);
        console.log('ResetPassword================');
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
    return fetch(URL_USER, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('UserInfo================');
        console.log(res);
        console.log('UserInfo================');
        dispatch(getUserInfo(res));
        dispatch(loadingUser(false));
            
        // localStorage.setItem('token', res.refreshToken)
        // sessionStorage.setItem('token', res.accessToken)
        // dispatch(loginUser(res))
        // dispatch(loadingUser(false))
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
    return fetch(URL_LOGOUT, {
      method: 'POST', 
      body: JSON.stringify({
        'token': localStorage.getItem('token')
      }),
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('Logout================');
        console.log(res);
        console.log('Logout================');
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        dispatch(logoutUser());
        dispatch(loadingUser(false));
        // localStorage.setItem('token', res.refreshToken)
        // sessionStorage.setItem('token', res.accessToken)
        // dispatch(loginUser(res))
        // dispatch(loadingUser(false))
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
    dispatch(loadingUser(true));
    return fetch(URL_TOKEN, {
      method: 'POST', 
      body: JSON.stringify({
        'token': localStorage.getItem('token')
      }),
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {if (res.ok) {return res.json();}
        return Promise.reject(`Ошибка: ${res.status}`);})
      .then((res) => {
        console.log('RefreshToken================');
        console.log(res);
        console.log('RefreshToken================');
        localStorage.setItem('token', res.refreshToken);
        sessionStorage.setItem('token', res.accessToken);
        dispatch(loadingUser(false));
        dispatch(errorUser(false));
        // dispatch(loginUser(res))
        // dispatch(loadingUser(false))
      })
      .catch(e => {
        dispatch(errorUser(true));
        dispatch(loadingUser(false));
        console.log('Ошибка получения данных с сервера', e.message);
      });
  };
};

