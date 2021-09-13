import React from 'react';
import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses,
    //otherReducer
});


export default rootReducer;
