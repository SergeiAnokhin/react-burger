import { GET_ORDER, IS_OPENED_ORDER_MODAL, IS_LOADING_ORDER, HAS_ERROR_ORDER } from "../actions/types-actions";

export const isOpenedOrderModal = (value) => {
    return {type: IS_OPENED_ORDER_MODAL, payload: value}
}

export const getOrder = (value) => {
    return {type: GET_ORDER, payload: value}
}

export const isLoading = (value) => {
    return {type: IS_LOADING_ORDER, payload: value}
}

export const hasError = (value) => {
    return {type: HAS_ERROR_ORDER, payload: value}
}