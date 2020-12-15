import {GET_ORDERS, TEST} from "./actionTypes";

export function test() {
    return {
        type: TEST
    }
}

export function getOrders() {
    return async dispatch => {
        try {
            const response = await fetch('https://admin-ct.cargis.pro/api/client/v1/public/orders/list')
            const json = await response.json()
            dispatch({type: GET_ORDERS, payload: json})
        } catch (e) {
            console.log(e)
        }
    }
}

