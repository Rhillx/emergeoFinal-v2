import {combineReducers} from 'redux';
import location from './location_reducer';
import user from './profile_reducer';

import data from './data';


const rootReducers= combineReducers({
 
 data,
 location,
 user

});


export default rootReducers;