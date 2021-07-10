import * as actions from '../actions/actionTypes';
import initialState from '../store/initialState';

function jobsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_JOB:
            return [
                ...state,
                action.payload
            ];
        case actions.GET_JOB_STATUS:
            return action.payload
        default:
            return state;
    }
}

export default jobsReducer;


