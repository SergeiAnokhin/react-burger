import {
  getOrder,
  openOrderModal,
  loadingOrder,
  errorOrder
} from '../actions/order-actions';
import { resetConstructor } from '../actions/constructor-actions';
import { URL_ORDER } from './api';

export const getOrderThunk = (data) =>
  data.length > 0
    ? (dispatch) => {
        dispatch(loadingOrder(true));
        return fetch(URL_ORDER, {
          method: 'POST',
          body: JSON.stringify({
            ingredients: data
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: sessionStorage.getItem('token')
          }
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((res) => {
            dispatch(loadingOrder(false));
            dispatch(getOrder(res));
            dispatch(openOrderModal(true));
            dispatch(resetConstructor());
          })
          .catch((e) => {
            dispatch(errorOrder(true));
            dispatch(loadingOrder(false));
            console.log('Ошибка получения данных с сервера', e.message);
          });
      }
    : () => {};
