import {GET_ORDERS, TEST} from "./actionTypes";

const initialState = {
    routs: []
}

export const routsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return {...state, test: 'test'}
        case GET_ORDERS:
            return {...state, routs: action.payload}
        default:
            return state
    }
}