import { IS_OPENED_MODAL, GET_ID_ITEM } from "../actions/types-actions";

const initialState = {
    isOpened: false,
    itemId: '',
}

export const itemReducer = (state = initialState, action) => {
    switch(action.type) {
      case IS_OPENED_MODAL:
        return {...state, isOpened: action.payload}
      case GET_ID_ITEM:
        return {...state, itemId: action.payload}
      default:
        return state;
    }
  }