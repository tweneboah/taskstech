import * as actions from './actionTypes';

export const signInAction = (userState) => {
    return {
        type:actions.SIGN_IN,
        payload:{
            isSignedIn:true,
            uid:userState.id,
        }
    }
};

export const signOutAction = () => {
    return {
        type:actions.SIGN_OUT,
        payload:{
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            phone:"",
            description:"",
            isSignedIn:false,
            id:"",
        }
    }
};