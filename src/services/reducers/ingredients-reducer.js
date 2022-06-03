import { GET_INGREDIENTS, IS_LOADING, HAS_ERROR } from "../actions/types-actions";

const initialState = {
    isLoading: false,
    hasError: false,
    ingredients: []
}

export const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
      case GET_INGREDIENTS:
        return {...state, ingredients: action.payload}
      case IS_LOADING:
        return {...state, isLoading: action.payload}
      case HAS_ERROR:
        return {...state, hasError: action.payload}
      default:
        return state;
    }
  }