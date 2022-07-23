import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE
} from '../actions/types-actions';

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export const wsConnectionStart = (value) => ({
  type: WS_CONNECTION_START,
  payload: value
});

export const wsConnectionSuccess = (value) => ({
  type: WS_CONNECTION_SUCCESS,
  payload: value
});

export const wsConnectionClosed = () => ({
  type: WS_CONNECTION_CLOSED
});

export const wsConnectionError = (value) => ({
  type: WS_CONNECTION_ERROR,
  payload: value
});

export const wsGetMessage = (value) => ({
  type: WS_GET_MESSAGE,
  payload: value
});
