import {combineReducers} from "redux";
import {routsReducer} from "./routsReducer";

const rootReducer = combineReducers({
    routs: routsReducer
})

export default rootReducer