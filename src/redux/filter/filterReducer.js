import { FILTER_AUTHOR, FILTER_CATEGORY } from "./actionTypes";
import initialState from "./filter_initialState";


const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case FILTER_AUTHOR:
            return {
                ...state,
                author: action.payload
            }

        default:
            return state;
    }
}

export default filterReducer;