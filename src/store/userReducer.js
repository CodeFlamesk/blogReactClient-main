
const defaultState = {
    isAuth: false,
    user: {},
    isLoading: true,
    paramSettings: "changeInfo",
}


const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";
const LOGOUT = "LOGOUT"
const CHANGE_LOADING = "CHANGE_LOADING";
const CHANGE_PARAM_SETTINGS = "CHANGE_PARAM_SETTINGS";

export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOGIN: 
            return {...state, isAuth: true, user: action.payload}
        case REGISTRATION: 
            return {...state, isAuth: true, user: action.payload}
        case LOGOUT: 
            return {...state, isAuth: false, user: []}
        case CHANGE_LOADING: 
            return {...state, isLoading: action.payload}
        case CHANGE_PARAM_SETTINGS: 
            return {...state, paramSettings: action.payload}
            default: 
                return state 
    }
}

export const registrationUser = (payload) => ({type:REGISTRATION, payload});
export const loginUser = (payload) => ({type:LOGIN, payload});
export const logoutUser = (payload) => ({type:LOGOUT, payload});
export const changeLoadingAuth = (payload) => ({type:CHANGE_LOADING, payload});
export const changeParamSettings = (payload) => ({type:CHANGE_PARAM_SETTINGS, payload})