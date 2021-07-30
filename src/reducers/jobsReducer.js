import * as actions from '../actions/actionTypes';

function jobsReducer(state = {}, action) {
    switch (action.type) {
        case actions.ADD_JOB:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

export default jobsReducer;


