import { combineReducers } from 'redux';
import {NewsReducer} from './newsReducer'

 export default combineReducers({
    newsReducer: NewsReducer,
    });