import {
  GET_ORDER,
  OPEN_ORDER_MODAL,
  LOADING_ORDER,
  ERROR_ORDER
} from '../actions/types-actions';

export const openOrderModal = (value) => ({
  type: OPEN_ORDER_MODAL,
  payload: value
});

export const getOrder = (value) => ({ type: GET_ORDER, payload: value });

export const loadingOrder = (value) => ({
  type: LOADING_ORDER,
  payload: value
});

export const errorOrder = (value) => ({ type: ERROR_ORDER, payload: value });
