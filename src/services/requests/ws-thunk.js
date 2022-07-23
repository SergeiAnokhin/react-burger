import { getCookie } from '../../utils/cookie';

export const wsMiddleware = (wsUrl, wsActions) => (store) => {
  let socket = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type } = action;
    const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

    if (type === wsInit) {
      if (wsUrl.includes('all')) {
        socket = new WebSocket(wsUrl);
      } else {
        socket = new WebSocket(
          `${wsUrl}?token=${getCookie('token').split('Bearer ')[1]}`
        );
      }
    }

    if (socket) {
      socket.onopen = (event) => {
        dispatch({ type: onOpen, payload: event });
      };

      socket.onerror = (event) => {
        dispatch({ type: onError, payload: event });
      };

      socket.onmessage = (event) => {
        const { data } = event;
        const dataObj = JSON.parse(data);
        dispatch({ type: onMessage, payload: dataObj });
      };

      socket.onclose = (event) => {
        dispatch({ type: onClose, payload: event });
      };
    }

    if (type === onClose) {
      socket.close();
    }

    next(action);
  };
};
