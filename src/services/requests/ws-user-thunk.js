import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_GET_MESSAGE
} from '../actions/types-actions';

export const wsUserMiddleware = (wsUrl) => (store) => {
  let socket = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type } = action;

    if (type === WS_USER_CONNECTION_START) {
      socket = new WebSocket(wsUrl);
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

    next(action);
  };
};
