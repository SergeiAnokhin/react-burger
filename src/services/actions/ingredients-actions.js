import { GET_INGREDIENTS, HAS_ERROR, IS_LOADING } from "../actions/types-actions";

export const getIngredients = (res) => {
    return {type: GET_INGREDIENTS, payload: res}
}

export const isLoading = (value) => {
    return {type: IS_LOADING, payload: value}
}

export const hasError = (value) => {
    return {type: HAS_ERROR, payload: value}
}