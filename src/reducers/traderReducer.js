import * as actions from '../actions/actionTypes';

const initialState = {
   trader:{
       firstname:"",
       lastname:"",
       email:"",
       password:"",
       phone:"",
       description:"",
       isSignedIn:false,
       id:"",
   }
};

function tradeReducer(state = initialState.trader, action) {
    switch (action.type) {
        case actions.SIGN_IN:
            return {
                ...state,
                ...action.payload,
            }
        case actions.SIGN_OUT:
            return {
                ...action.payload,
                loading: action.loading
            }
        default:
            return state;
    }
}

export default tradeReducer;