import * as actions from '../actions/actionTypes';

function jobStatusReducer(state = [], action) {
    switch (action.type) {
        case actions.GET_JOB_STATUS:
            return action.payload
        default:
            return state;
    }
}

export default jobStatusReducer;