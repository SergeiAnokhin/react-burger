import { SET_INGREDIENTS, LOADING_INGREDIENTS, ERROR_INGREDIENTS } from "../actions/types-actions";

export const setIngredients = (res) => {
    return {type: SET_INGREDIENTS, payload: res}
}

export const loadingIngredients = (value) => {
    return {type: LOADING_INGREDIENTS, payload: value}
}

export const errorIngredients = (value) => {
    return {type: ERROR_INGREDIENTS, payload: value}
}