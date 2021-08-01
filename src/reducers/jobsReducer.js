import * as actions from '../actions/actionTypes';


function jobsReducer(state = {}, action) {
    switch (action.type) {
        case actions.CREATE_JOB_STARTED:
            return {
                ...state,
                loading: action.loading
            };
        case actions.CREATE_JOB:
            return {
                ...state,
                payload: action.payload,
                loading: action.loading
            };
        default:
            return state;
    }
}

export default jobsReducer;


