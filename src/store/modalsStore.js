
const defaultState = {
    mainTitle: "",
    text: "",
    active: false,
    modalsActiveForgot: false,
    modalsForgotCode: false,
    modalsChangePassword: false,
    thankError: false
}

const CHANGE_ACTIVE_MODAL = "CHANGE_ACTIVE_MODAL";
const CHANGE_TEXT_MODAL = "CHANGE_TEXT_MODAL";
const CHANGE_TITLE_MODAL = "CHANGE_TITLE_MODAL";
const CHANGE_ACTIVE_FORGOT = "CHANGE_ACTIVE_FORGOT";
const MODALS_FORGOT_CODE = "MODALS_FORGOT_CODE";
const MODALS_PASSWORD = "MODALS_PASSWORD";
const OFF_MODAL_FORGOT = "OFF_MODAL_FORGOT";
const CHANGE_THANK_ERROR = "CHANGE_THANK_ERROR";


export const modalsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_ACTIVE_MODAL: 
            return {...state, active: action.payload}
        case CHANGE_TEXT_MODAL: 
            return {...state, text: action.payload}
        case CHANGE_TITLE_MODAL: 
            return {...state, mainTitle: action.payload}
        case CHANGE_ACTIVE_FORGOT: 
            return {...state, modalsActiveForgot: action.payload}
        case MODALS_FORGOT_CODE: 
            return {...state, modalsForgotCode: action.payload}
        case MODALS_PASSWORD: 
            return {...state, modalsChangePassword: action.payload}
        case OFF_MODAL_FORGOT: 
            return {...state, modalsActiveForgot: false, modalsForgotCode: false, modalsChangePassword:false }
        case CHANGE_THANK_ERROR: 
            return {...state, thankError: action.payload}
            default: 
                return state 
    }
}

export const changeActiveModal = (payload) => ({type:CHANGE_ACTIVE_MODAL, payload});
export const changeTextModal = (payload) => ({type:CHANGE_TEXT_MODAL, payload});
export const changeTitleModal = (payload) => ({type:CHANGE_TITLE_MODAL, payload});
export const changeForgotActive = (payload) => ({type:CHANGE_ACTIVE_FORGOT, payload});
export const changeModalsForgotCode = (payload) => ({type:MODALS_FORGOT_CODE, payload});
export const changeModalsPassword = (payload) => ({type:MODALS_PASSWORD, payload});
export const offForgotModal = () => ({type:OFF_MODAL_FORGOT});
export const changeThankError = (payload) => ({type:CHANGE_THANK_ERROR, payload});