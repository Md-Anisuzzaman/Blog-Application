
import { GET_BLOG } from "./actionTypes";
import initialState from "./initialState"


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_BLOG:
            return [
                ...state, 
            ];
          
        default:
            return state;
    }

}

export default reducer;