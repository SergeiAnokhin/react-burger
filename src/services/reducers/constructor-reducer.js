import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, SORT_CONSTRUCTOR, RESET_CONSTRUCTOR} from "../actions/types-actions";

const initialState = {
    bun: [],
    ingredients: [],
    allIngredientsId: []
}

export const constructorReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_BUN:
            return {...state, 
              bun: [action.payload], 
              allIngredientsId: 
              state.bun.length === 0 && state.ingredients.length === 0 ? [action.payload._id, action.payload._id] : 
              state.bun.length === 0 && state.ingredients.length !== 0 ? [action.payload._id, ...state.ingredients.map(item => item._id), action.payload._id] :
              state.bun.length !== 0 && state.ingredients.length === 0 ? [action.payload._id, action.payload._id] :
              state.bun.length !== 0 && state.ingredients.length !== 0 ? [action.payload._id, ...state.ingredients.map(item => item._id), action.payload._id] : 
              [...state.bun._id, ...state.ingredients.map(item => item._id), ...state.bun._id]}
      case ADD_INGREDIENT:
        return {
          ...state, 
          ingredients: [...state.ingredients, action.payload], 
          allIngredientsId: [
            state.allIngredientsId[0],
            ...state.ingredients.map(item => item._id),
            action.payload._id,
            state.allIngredientsId[state.allIngredientsId.length - 1]
          ]
        }
      case DELETE_INGREDIENT:
        return {
          ...state, 
          ingredients: [
            ...state.ingredients.slice(0, state.ingredients.findIndex(item => item._id === action.payload)), 
            ...state.ingredients.slice(state.ingredients.findIndex(item => item._id === action.payload) + 1)
          ], 
          allIngredientsId: [
            state.allIngredientsId[0], 
            ...state.allIngredientsId.slice(1, state.allIngredientsId.findIndex(item => item === action.payload)), 
            ...state.allIngredientsId.slice(state.allIngredientsId.findIndex(item => item === action.payload) + 1)
          ]
        }
      case SORT_CONSTRUCTOR:
          return {...state, 
            ingredients: action.payload, allIngredientsId: [...state.bun.map(item => item._id), ...action.payload.map(item => item._id), ...state.bun.map(item => item._id)]}
      case RESET_CONSTRUCTOR:
        return {...state, ingredients: [], bun: [], allIngredientsId: []}
      default:
        return state;
    }
  }