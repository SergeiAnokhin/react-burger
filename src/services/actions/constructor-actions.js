import { nanoid } from 'nanoid';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_CONSTRUCTOR,
  RESET_CONSTRUCTOR
} from './types-actions';

export const addBun = (res) => ({ type: ADD_BUN, payload: res });

export const addIngredient = (res) => ({
  type: ADD_INGREDIENT,
  payload: { ...res, nanoid: nanoid() }
});

export const deleteIngredient = (id) => ({
  type: DELETE_INGREDIENT,
  payload: id
});

export const sortConstructor = (res) => ({
  type: SORT_CONSTRUCTOR,
  payload: res
});

export const resetConstructor = () => ({ type: RESET_CONSTRUCTOR });
