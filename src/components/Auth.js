import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { listenAuthState } from '../actions/action';
import { getIsSignedIn } from '../selector/traderSelector';

const Auth = ({children}) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) =>state);
    const isSignedIn = getIsSignedIn(selector);

    useEffect(() => {
        if(!isSignedIn){
            dispatch(listenAuthState())
        }
    }, []);

    if(!isSignedIn){
        return <></>
    } else {
        return children
    }
    
}
export default Auth;