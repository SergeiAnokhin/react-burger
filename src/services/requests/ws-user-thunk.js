import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_GET_MESSAGE
} from '../actions/types-actions';
import { URL_GET_ORDERS } from './api';

export const wsUserMiddleware = () => (store) => {
  let socket = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type } = action;

    if (type === WS_USER_CONNECTION_START) {
      socket = new WebSocket(
        `${URL_GET_ORDERS}?token=${
          sessionStorage.getItem('token').split('Bearer ')[1]
        }`
      );
    }

    if (socket) {
      socket.onopen = (event) => {
        dispatch({ type: WS_USER_CONNECTION_SUCCESS, payload: event });
      };

      socket.onerror = (event) => {
        dispatch({ type: WS_USER_CONNECTION_ERROR, payload: event });
      };

      socket.onmessage = (event) => {
        const { data } = event;
        const dataObj = JSON.parse(data);
        dispatch({ type: WS_USER_GET_MESSAGE, payload: dataObj });
      };

      socket.onclose = (event) => {
        dispatch({ type: WS_USER_CONNECTION_CLOSED, payload: event });
      };
    }

    if (type === WS_USER_CONNECTION_CLOSED) {
      socket.close();
    }

    next(action);
  };
};
