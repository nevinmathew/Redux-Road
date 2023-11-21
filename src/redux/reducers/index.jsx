import {combineReducers} from 'redux';
import wagonReducer from './wagonReducer';

const rootReducer = combineReducers({
    wagon: wagonReducer
});

export default rootReducer;