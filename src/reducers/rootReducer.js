import { combineReducers } from 'redux';
import jobsReducer from '../reducers/jobsReducer';
import jobStatusReducer from '../reducers/jobStatusReducer';

const rootReducer = combineReducers({
    status: jobStatusReducer,
    jobs: jobsReducer
});

export default rootReducer;