import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE
} from '../actions/types-actions';

export const wsMiddleware = (wsUrl) => (store) => {
  let socket = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type } = action;

    if (type === WS_CONNECTION_START) {
      socket = new WebSocket(wsUrl);
    }

    if (socket) {
      socket.onopen = (event) => {
        dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
      };

      socket.onerror = (event) => {
        dispatch({ type: WS_CONNECTION_ERROR, payload: event });
      };

      socket.onmessage = (event) => {
        const { data } = event;
        const data1 = JSON.parse(data);
        console.log(data1);
        dispatch({ type: WS_GET_MESSAGE, payload: data1 });
      };

      socket.onclose = (event) => {
        dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
      };
    }

    next(action);
  };
};
