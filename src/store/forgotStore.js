
const defaultState = {
    forgotEmail: "",
    forgotCode: ""
}

const ADD_EMAIL_FORGOT = "ADD_EMAIL_FORGOT";
const ADD_CODE_FORGOT = "ADD_CODE_FORGOT";

export const forgotReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_CODE_FORGOT: 
            return {...state, forgotCode: action.payload}
        case ADD_EMAIL_FORGOT: 
            return {...state, forgotEmail: action.payload}
            default: 
                return state 
    }
}

export const changeForgotEmail = (payload) => ({type:ADD_EMAIL_FORGOT , payload});
export const changeForgotCode = (payload) => ({type:ADD_CODE_FORGOT , payload})