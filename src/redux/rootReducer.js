import { combineReducers } from "redux";
import reducer from "./Allblog/reducer";
import filterReducer from "./filter/filterReducer";



const rootReducer = combineReducers({
    blogs:reducer,
    filters:filterReducer
});
export default rootReducer;