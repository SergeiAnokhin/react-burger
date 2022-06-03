import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, RESET_CONSTRUCTOR } from "./types-actions"

export const addBun = (res) => {
    return {type: ADD_BUN, payload: res}
}

export const addIngredient = (res) => {
    return {type: ADD_INGREDIENT, payload: res}
}

export const deleteIngredient = (id) => {
    return {type: DELETE_INGREDIENT, payload: id}
}

export const resetConstructor = () => {
    return {type: RESET_CONSTRUCTOR}
}