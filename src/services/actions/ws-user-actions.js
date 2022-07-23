import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_GET_MESSAGE
} from '../actions/types-actions';

export const wsUserActions = {
  wsInit: WS_USER_CONNECTION_START,
  onOpen: WS_USER_CONNECTION_SUCCESS,
  onClose: WS_USER_CONNECTION_CLOSED,
  onError: WS_USER_CONNECTION_ERROR,
  onMessage: WS_USER_GET_MESSAGE
};

export const wsUserConnectionStart = (value) => ({
  type: WS_USER_CONNECTION_START,
  payload: value
});
export const wsUserConnectionSuccess = (value) => ({
  type: WS_USER_CONNECTION_SUCCESS,
  payload: value
});

export const wsUserConnectionClosed = (value) => ({
  type: WS_USER_CONNECTION_CLOSED,
  payload: value
});

export const wsUserConnectionError = (value) => ({
  type: WS_USER_CONNECTION_ERROR,
  payload: value
});

export const wsUserGetMessage = (value) => ({
  type: WS_USER_GET_MESSAGE,
  payload: value
});
