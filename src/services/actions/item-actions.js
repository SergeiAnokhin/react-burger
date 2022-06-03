import { IS_OPENED_MODAL, GET_ID_ITEM } from "../actions/types-actions";

export const isOpenedModal = (value) => {
    return {type: IS_OPENED_MODAL, payload: value}
}

export const getIdItem = (id) => {
    return {type: GET_ID_ITEM, payload: id}
}