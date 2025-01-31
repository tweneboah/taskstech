import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    payload: []
};

function jobsReducer(state = initialState, action) {
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
        case actions.GET_ALL_JOBS_STARTED:
            return {
                ...state,
                loading: true
            };
        case actions.GET_ALL_JOBS:
            return {
                ...state,
                payload: action.payload,
                loading: false
            };
        case actions.GET_COMPLETED_JOBS_STARTED:
            return {
                ...state,
                loading: true
            };
        case actions.GET_COMPLETED_JOBS:
            return Object.assign({}, state, {
                completedJobs: action.payload,
                loading: false
            })
        default:
            return state;
    }
}

export default jobsReducer;


