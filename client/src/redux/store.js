import { combineReducers, compose, createStore } from "redux";

const rootReducer = combineReducers({
    authStore: authReducer,
    courseStore: courseReducer,
    
});

export const createReduxStore = () => {
    return createStore(
        rootReducer      
    );
};