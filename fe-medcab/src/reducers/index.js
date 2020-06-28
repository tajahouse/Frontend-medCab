import React from 'react';

import strainReducer from './strainReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    userReducer,
    strainReducer
});