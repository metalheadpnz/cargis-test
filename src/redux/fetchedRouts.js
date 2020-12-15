import {TEST} from "./actionTypes";

const initialState = {

}

export const fetchedRouts = (state=initialState, action) => {
    switch (action.type) {
        case TEST:
            return {...state, test: 'test'}
        default: return state
    }
}