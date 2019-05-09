import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';
import streamsReducer from './streamsReducer';


export default combineReducers({
    isSign:authReducer,
    form:formReducer,
    streams:streamsReducer
})