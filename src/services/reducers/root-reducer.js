import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients-reducer";
import { itemReducer } from "./item-reducer";
import { constructorReducer } from "./constructor-reducer";
import { orderReducer } from "./order-reducer";

export const rootReducer = combineReducers({
    ingredientsReducer,
    itemReducer, 
    constructorReducer,
    orderReducer
})