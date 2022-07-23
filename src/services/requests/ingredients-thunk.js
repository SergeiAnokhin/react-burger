import {
  setIngredients,
  loadingIngredients,
  errorIngredients
} from '../actions/ingredients-actions';
import { API_URL } from './api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const setIngredientsThunk = () => (dispatch) => {
  dispatch(loadingIngredients(true));
  return fetch(`${API_URL}/ingredients`)
    .then(checkResponse)
    .then((res) => {
      dispatch(setIngredients(res.data));
    })
    .catch((e) => {
      dispatch(errorIngredients(true));
      console.log('Ошибка получения данных с сервера', e.message);
    })
    .finally(() => {
      dispatch(loadingIngredients(false));
    });
};
