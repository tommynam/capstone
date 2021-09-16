import { combineReducers, compose, createStore } from "redux";
import { studentReducer } from "./students/reducers";

const rootReducer = combineReducers({
    authStore: authReducer,
    courseStore: courseReducer,
    studentStore: studentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(rootReducer, composeEnhancers())