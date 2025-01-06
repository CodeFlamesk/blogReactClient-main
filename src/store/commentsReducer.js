const defaultState = {
    comments: [],
    commentsAdminIsCheck: [],
    
}


const ADD_COMMENTS_ADMIN = "ADD_COMMENTS_ADMIN";
const GET_COMMENTS_ALL = "GET_COMMENTS_ALL";

export const commentsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_COMMENTS_ALL: 
            return { ...state, comments: action.payload }
        case ADD_COMMENTS_ADMIN: 
            return { ...state, commentsAdminIsCheck: action.payload }
            default: 
                return state 
    }
}


export const getAllComments = (payload) => ({type: GET_COMMENTS_ALL, payload});
export const getCommentsAdmin = (payload) => ({type: ADD_COMMENTS_ADMIN, payload})
