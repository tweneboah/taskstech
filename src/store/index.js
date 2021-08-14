import {createStore as reduxCreateStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from "connected-react-router";
import jobsReducer from '../reducers/jobsReducer';
import jobStatusReducer from '../reducers/jobStatusReducer';
import traderReducer from '../reducers/traderReducer';


export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            router:connectRouter(history),
            trader:traderReducer,
            status: jobStatusReducer,
            job: jobsReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}