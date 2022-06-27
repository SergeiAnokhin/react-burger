import { nanoid } from 'nanoid';
import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, SORT_CONSTRUCTOR, RESET_CONSTRUCTOR } from './types-actions';

export const addBun = (res) => {
  return {type: ADD_BUN, payload: res};
};

export const addIngredient = (res) => {
  return {type: ADD_INGREDIENT, payload: {...res, nanoid: nanoid()}};
};

export const deleteIngredient = (id) => {
  return {type: DELETE_INGREDIENT, payload: id};
};

export const sortConstructor = (res) => {
  return {type: SORT_CONSTRUCTOR, payload: res};
};

export const resetConstructor = () => {
  return {type: RESET_CONSTRUCTOR};
};