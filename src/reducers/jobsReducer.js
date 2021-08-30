import * as actions from '../actions/actionTypes';


function jobsReducer(state = {}, action) {
    switch (action.type) {
        case actions.CREATE_JOB_STARTED:
            return {
                ...state,
                loading: true
            };
        case actions.CREATE_JOB:
            return {
                ...state,
                payload: action.payload,
                loading: false
            };
        case actions.GET_JOBS_STARTED:
            return {
                ...state,
                loading: true
            };
        case actions.GET_JOBS:
            return {
                ...state,
                payload: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default jobsReducer;


