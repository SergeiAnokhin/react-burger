import { OPEN_INGREDIENT_MODAL, INGREDIENT_ID } from '../actions/types-actions';

const initialState = {
  open: false,
  itemId: ''
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL:
      return { ...state, open: action.payload };
    case INGREDIENT_ID:
      return { ...state, itemId: action.payload };
    default:
      return state;
  }
};
