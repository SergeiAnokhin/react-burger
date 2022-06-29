import {
  SET_INGREDIENTS,
  LOADING_INGREDIENTS,
  ERROR_INGREDIENTS
} from '../actions/types-actions';

export const setIngredients = (res) => ({
  type: SET_INGREDIENTS,
  payload: res
});

export const loadingIngredients = (value) => ({
  type: LOADING_INGREDIENTS,
  payload: value
});

export const errorIngredients = (value) => ({
  type: ERROR_INGREDIENTS,
  payload: value
});
