import { getIngredients, isLoading, hasError } from "../actions/ingredients-actions";

export const getIngredientsThunk = () => {
    return (dispatch) => {
        dispatch(isLoading(true))
        return fetch('https://norma.nomoreparties.space/api/ingredients')
        .then(res => {if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);})
        .then((res) => {
            dispatch(isLoading(false))
            dispatch(getIngredients(res.data))
        })
        .catch(e => {
            dispatch(hasError(true))
            dispatch(isLoading(false))
            console.log('Ошибка получения данных с сервера', e.message);
          });
    }
}