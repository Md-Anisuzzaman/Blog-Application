import { FILTER_AUTHOR, FILTER_CATEGORY } from "../filter/actionTypes"


export const filterCategory = (category) => {
    return {
        type: FILTER_CATEGORY,
        payload: category
    }
}
export const filterAuthor = (author) => {
    return {
        type: FILTER_AUTHOR,
        payload: author

    }
}