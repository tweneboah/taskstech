import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import jobsReducer from '../reducers/jobsReducer';
import jobStatusReducer from '../reducers/jobStatusReducer';
import activityReducer from '../reducers/activityReducer';
import traderReducer from '../reducers/traderReducer';
import inventoryReducer from './inventoryReducer';



const rootReducer = history => combineReducers({
    router:connectRouter(history),
    trader:traderReducer,
    status: jobStatusReducer,
    job: jobsReducer,
    activity: activityReducer,
    inventory:inventoryReducer
});

export default rootReducer;