import {combineReducers} from "redux";
import {routsReducer} from "./routsReducer";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    routs: routsReducer,
    app: appReducer
})

export default rootReducer