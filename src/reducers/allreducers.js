import {combineReducers} from 'redux';
import HomeReducer from './homereducer';
import editProductReducer from './editproductreducer';

const allReducers= combineReducers({
    home:HomeReducer,
    
});

export default allReducers;