import { combineReducers } from 'redux';

// REDUCERS
import UserReducer from './User/UserReducer';
const rootReducer = combineReducers({ UserReducer });

export { rootReducer };
