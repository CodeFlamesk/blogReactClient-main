
const defaultState = {
    layout: "client",
    panel: "dashboard",
    category: [],
    categoryId: "",
    post: {},
    loadingBlog: true,
    posts: [],
    activePostId:"66523d3cf5ac562f3683c2a5",
}

const CHANGE_ADMIN = "CHANGE_ADMIN";
const CHANGE_CLIENT = "CHANGE_CLIENT";
const CHANGE_PANEL = "CHANGE_PANEL";
const CATEGORY_GET = "CATEGORY_GET";
const CHANGE_CATEGORY_ID_NEWS = "CHANGE_CATEGORY_ID_NEWS";
const GET_BLOG = "GET_BLOG";
const GET_POSTS_ALL = "GET_POSTS_ALL";
const CHANGE_ACTIVE_POST_ID = "CHANGE_ACTIVE_POST_ID";



export const dashboardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_CLIENT: 
            return {...state, layout : "client"}
        case CHANGE_ADMIN: 
            return {...state, layout : "admin"}
        case CHANGE_PANEL: 
            return {...state, panel : action.payload};
        case CATEGORY_GET: 
            return {...state, category:action.payload}
        case CHANGE_CATEGORY_ID_NEWS: 
            return {...state, categoryId:action.payload}
        case GET_BLOG: 
            return {...state, post:action.payload, loadingBlog: false}
        case GET_POSTS_ALL: 
            return {...state, posts: action.payload}
        case CHANGE_ACTIVE_POST_ID: 
            return {...state, activePostId: action.payload}
            default: 
                return state 
    }
}

export const changeClient = () => ({type: CHANGE_CLIENT})
export const changeAdmin = () => ({type: CHANGE_ADMIN})
export const changePanel = (payload) => ({type: CHANGE_PANEL, payload})
export const categoryGet = (payload) => ({type: CATEGORY_GET, payload})
export const changeCategoryIdNews = (payload) => ({type: CHANGE_CATEGORY_ID_NEWS, payload})
export const getPostOnId = (payload) => ({type: GET_BLOG, payload})
export const getPostsAll = (payload) => ({type: GET_POSTS_ALL, payload})
export const changeActivePostId = (payload) => ({type: CHANGE_ACTIVE_POST_ID, payload})

