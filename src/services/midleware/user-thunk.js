import { registrationUser, loginUser, loadingUser, errorUser } from "../actions/user-actions";
import { URL_LOGIN, URL_REGISTRATION, URL_USER } from "./api";

export const registrationUserThunk = ({email, password, name}) => {   
    return (dispatch) => {
        dispatch(loadingUser(true))
        return fetch(URL_REGISTRATION, {
            method: 'POST', 
            body: JSON.stringify({
                "email": email, 
                "password": password, 
                "name": name 
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => {if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);})
        .then((res) => {
            console.log(res)
            dispatch(registrationUser(res))
            dispatch(loadingUser(false))
        })
        .catch(e => {
            dispatch(errorUser(true))
            dispatch(loadingUser(false))
            console.log('Ошибка получения данных с сервера', e.message);
          });
    }
}

export const loginUserThunk = ({email, password}) => {   
    return (dispatch) => {
        dispatch(loadingUser(true))
        return fetch(URL_LOGIN, {
            method: 'POST', 
            body: JSON.stringify({
                "email": email, 
                "password": password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => {if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);})
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.refreshToken)
            sessionStorage.setItem('token', res.accessToken)
            dispatch(loginUser(res))
            dispatch(loadingUser(false))
        })
        .catch(e => {
            dispatch(errorUser(true))
            dispatch(loadingUser(false))
            console.log('Ошибка получения данных с сервера', e.message);
          });
    }
}

export const getUserInfoThunk = () => {   
    return (dispatch) => {
        dispatch(loadingUser(true))
        return fetch(URL_USER, {
            method: 'GET', 
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': sessionStorage.getItem('token')
            },
        })
        .then(res => {if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);})
        .then((res) => {
            console.log(res)
            // localStorage.setItem('token', res.refreshToken)
            // sessionStorage.setItem('token', res.accessToken)
            // dispatch(loginUser(res))
            // dispatch(loadingUser(false))
        })
        .catch(e => {
            dispatch(errorUser(true))
            dispatch(loadingUser(false))
            console.log('Ошибка получения данных с сервера', e.message);
          });
    }
}