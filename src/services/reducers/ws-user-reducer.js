import {
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_GET_MESSAGE
} from '../actions/types-actions';

const initialState = {
  wsConnected: false,
  orders: [],
  total: '',
  totalToday: '',
  error: false
};

export const wsUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_USER_CONNECTION_SUCCESS:
      return {
        ...state,
        error: false,
        wsConnected: true
      };
    case WS_USER_CONNECTION_ERROR:
      return {
        ...state,
        error: true,
        wsConnected: false
      };
    case WS_USER_CONNECTION_CLOSED:
      return {
        ...state,
        error: false,
        wsConnected: false
      };
    case WS_USER_GET_MESSAGE:
      return {
        ...state,
        error: false,
        orders: [...action.payload.orders].reverse(),
        total: action.payload.total,
        totalToday: action.payload.totalToday
      };
    default:
      return state;
  }
};
