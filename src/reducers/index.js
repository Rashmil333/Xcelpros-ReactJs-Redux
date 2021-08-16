import add from './add';
import {combineReducers} from 'redux';
import current from "./current";
const rootReducer=combineReducers({
    add,current
})
export default rootReducer;
