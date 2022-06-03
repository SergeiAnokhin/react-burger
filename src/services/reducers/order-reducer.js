import { GET_ORDER, IS_OPENED_ORDER_MODAL, IS_LOADING_ORDER, HAS_ERROR_ORDER } from "../actions/types-actions";

const initialState = {
    name: '',
    order: {},
    success: false,
    isOpened: false,
    isLoading: false,
    hasError: false
}

export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
      case GET_ORDER:
        return {...state, name: action.payload.name, order: action.payload.order, success: action.payload.success }
      case IS_OPENED_ORDER_MODAL:
        return {...state, isOpened: action.payload}
      case IS_LOADING_ORDER:
        return {...state, isLoading: action.payload}
      case HAS_ERROR_ORDER:
        return {...state, hasError: action.payload}
      default:
        return state;
    }
  }