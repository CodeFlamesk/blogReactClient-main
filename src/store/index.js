import { applyMiddleware, combineReducers, createStore } from "redux";
import { dashboardReducer } from "./DashboardReducer"
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "./userReducer";
import { modalsReducer } from "./modalsStore";
import { forgotReducer } from "./forgotStore";
import { newsletterReducer } from "./newsletterStore";
import { commentsReducer } from "./commentsReducer";



const rootReducer = combineReducers({
    dashboard : dashboardReducer,
    user: userReducer,
    modals: modalsReducer,
    forgot: forgotReducer,
    newsletter: newsletterReducer,
    comments: commentsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))