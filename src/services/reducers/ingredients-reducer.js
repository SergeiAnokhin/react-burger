import {
  SET_INGREDIENTS,
  LOADING_INGREDIENTS,
  ERROR_INGREDIENTS
} from '../actions/types-actions';

const initialState = {
  loading: false,
  error: false,
  ingredients: []
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case LOADING_INGREDIENTS:
      return { ...state, loading: action.payload };
    case ERROR_INGREDIENTS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
