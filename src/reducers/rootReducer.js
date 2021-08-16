import { combineReducers } from 'redux';
import jobsReducer from '../reducers/jobsReducer';
import jobStatusReducer from '../reducers/jobStatusReducer';
import traderReducer from './traderReducer';

const rootReducer = combineReducers({
    status: jobStatusReducer,
    job: jobsReducer,
    trader:traderReducer
});

export default rootReducer;