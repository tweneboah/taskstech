import * as actions from './actionTypes';

export const signInAction = (userState) => {
    return {
        type:actions.SIGN_IN,
        payload:{
            isSignedIn:true,
            id:userState.id,
        }
    }
};