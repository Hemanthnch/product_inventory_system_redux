import {combineReducers} from 'redux';
import HomeReducer from './homereducer';

const allReducers= combineReducers({
    home:HomeReducer
});

export default allReducers;