import { OPEN_INGREDIENT_MODAL, INGREDIENT_ID } from '../actions/types-actions';

export const openIngredientModal = (value) => ({
  type: OPEN_INGREDIENT_MODAL,
  payload: value
});

export const ingredientId = (id) => ({ type: INGREDIENT_ID, payload: id });
