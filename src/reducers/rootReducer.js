import { combineReducers } from 'redux';
import jobsReducer from '../reducers/jobsReducer';
import jobStatusReducer from '../reducers/jobStatusReducer';

const rootReducer = combineReducers({
    status: jobStatusReducer,
    job: jobsReducer
});

export default rootReducer;