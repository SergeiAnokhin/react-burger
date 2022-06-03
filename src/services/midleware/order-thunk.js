import { getOrder, isOpenedOrderModal, isLoading, hasError } from "../actions/order-actions";
import { resetConstructor } from "../actions/constructor-actions";

export const getOrderThunk = (data) => {
    
    return data.length > 0 ? (dispatch) => {
        dispatch(isLoading(true))
        return fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST', 
            body: JSON.stringify({ 
                "ingredients": data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => {if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);})
        .then((res) => {
            dispatch(isLoading(false))
            dispatch(getOrder(res))
            dispatch(isOpenedOrderModal(true))
            dispatch(resetConstructor())
        })
        .catch(e => {
            dispatch(hasError(true))
            dispatch(isLoading(false))
            console.log('Ошибка получения данных с сервера', e.message);
          });
    } : null
}