import { setIngredients, loadingIngredients, errorIngredients } from "../actions/ingredients-actions";
import { URL_INGREDIENTS } from "./api";

export const setIngredientsThunk = () => {
    return (dispatch) => {
        dispatch(loadingIngredients(true))
        return fetch(URL_INGREDIENTS)
        .then(res => {if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);})
        .then((res) => {
            dispatch(loadingIngredients(false))
            dispatch(setIngredients(res.data))
        })
        .catch(e => {
            dispatch(errorIngredients(true))
            dispatch(loadingIngredients(false))
            console.log('Ошибка получения данных с сервера', e.message);
          });
    }
}