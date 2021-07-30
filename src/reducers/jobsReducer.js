import * as actions from '../actions/actionTypes';

function jobsReducer(state = {}, action) {
    switch (action.type) {
        case actions.CREATE_JOB:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
}

export default jobsReducer;


