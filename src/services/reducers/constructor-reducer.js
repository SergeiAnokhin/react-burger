import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, RESET_CONSTRUCTOR} from "../actions/types-actions";

const initialState = {
    bun: [],
    ingredients: [],
    allIngredientsId: []
}

export const constructorReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_BUN:
            return {...state, bun: [action.payload], allIngredientsId: [...state.allIngredientsId, action.payload._id]}
      case ADD_INGREDIENT:
        return {...state, ingredients: [...state.ingredients, action.payload], allIngredientsId: [...state.allIngredientsId, action.payload._id]}
      case DELETE_INGREDIENT:
        return {...state, ingredients: [...state.ingredients.filter(item => item._id !== action.payload)]}
      case RESET_CONSTRUCTOR:
        return {...state, ingredients: [], bun: [], allIngredientsId: []}
      default:
        return state;
    }
  }