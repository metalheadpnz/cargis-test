import {combineReducers} from "redux";
import {fetchedRouts} from "./fetchedRouts";

const rootReducer = combineReducers({
    fetchedRouts: fetchedRouts
})

export default rootReducer