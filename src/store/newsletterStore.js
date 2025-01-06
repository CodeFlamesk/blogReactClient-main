
const defaultState = {
    modalsNewsletter: false,
    newsletter: false
}

const ACTIVE_MODAL_SUBSCRIBE = "ACTIVE_MODAL_SUBSCRIBE"
const SUBSCRIBE_OR_NO = "SUBSCRIBE_OR_NO"
export const newsletterReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ACTIVE_MODAL_SUBSCRIBE: 
            return {...state, modalsNewsletter:action.payload}
        case SUBSCRIBE_OR_NO: 
            return {...state, newsletter:action.payload}
            default: 
                return state 
    }
}


export const changeActiveModalsSubscribe  = (payload) => ({type:ACTIVE_MODAL_SUBSCRIBE, payload});
export const changeSubscribe  = (payload) => ({type:SUBSCRIBE_OR_NO, payload});

