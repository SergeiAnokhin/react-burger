import { GET_ORDER, OPEN_ORDER_MODAL, LOADING_ORDER, ERROR_ORDER } from "../actions/types-actions";

const initialState = {
    name: '',
    order: {},
    success: false,
    open: false,
    loading: false,
    error: false
}

export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
      case GET_ORDER:
        return {...state, name: action.payload.name, order: action.payload.order, success: action.payload.success }
      case OPEN_ORDER_MODAL:
        return {...state, open: action.payload}
      case LOADING_ORDER:
        return {...state, loading: action.payload}
      case ERROR_ORDER:
        return {...state, error: action.payload}
      default:
        return state;
    }
  }