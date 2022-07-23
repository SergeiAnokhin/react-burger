import {
  getOrder,
  openOrderModal,
  loadingOrder,
  errorOrder
} from '../actions/order-actions';
import { resetConstructor } from '../actions/constructor-actions';
import { API_URL } from './api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getOrderThunk = (data) =>
  data.length > 0
    ? (dispatch) => {
        dispatch(loadingOrder(true));
        return fetch(`${API_URL}/orders`, {
          method: 'POST',
          body: JSON.stringify({
            ingredients: data
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: sessionStorage.getItem('token')
          }
        })
          .then(checkResponse)
          .then((res) => {
            dispatch(getOrder(res));
            dispatch(openOrderModal(true));
            dispatch(resetConstructor());
          })
          .catch((e) => {
            dispatch(errorOrder(true));

            console.log('Ошибка получения данных с сервера', e.message);
          })
          .finally(() => {
            dispatch(loadingOrder(false));
          });
      }
    : () => {};
