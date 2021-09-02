import * as actions from './actionTypes';
import {push} from 'connected-react-router';
import taskstechApi from '../api/taskstechApi';
import {signInAction} from './traderActions';
import { fetchInventoryAction} from './inventoryActions'



export const createJob = (job) => async dispatch => {
    dispatch({ type: actions.CREATE_JOB_STARTED, loading: true });

    await taskstechApi
        .post('/job', job)
        .then(() => {
            dispatch({ type: actions.CREATE_JOB, payload: job, loading: false });
        }).catch(e => {
            console.log(e)
        });
        
}

export const getStatus = () => async dispatch => {
    const response = await taskstechApi.get('/lists');

    dispatch({ type: actions.GET_JOB_STATUS_STARTED, loading: true});

    if(response) {
        dispatch({ type: actions.GET_JOB_STATUS, payload: response.data.job_status, loading: false});
    }
}

/*
export const getStatus = () => async dispatch => {
    const response = await taskstechApi.get('/lists');

    dispatch({ type: actions.GET_JOB_STATUS, payload: response.data.job_status, loading: true});
}
*/

// Trader Action


// Authentication Action
export const listenAuthState = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        if(!token) {
            dispatch(push('/login'))
        }
        dispatch(signInAction({
            isSignedIn:true,
        }))
    }
}


//Inventory Actions

export const createInventory = (inventoryData) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        try {
            taskstechApi.post(`/inventory`, inventoryData, {
                  headers:{authorization:`Bearer ${token}`}
              })
            .then(res =>{
                console.log(res)
                dispatch(push('/inventory/create'))
            })
        } catch(error){
            console.log(error.message)
        }
    }
}

export const fetchInventory = () => {
    return async (dispatch) => {
        // const token = localStorage.getItem('token');
        try {
            taskstechApi.get(`/inventory`,{
                  headers:{Authorization:`Bearer {Token should be get from Swagger} `}
              })
            .then(res =>{
                console.log(res)
                const items = res.data.items
                const inventoryList = []
                items.forEach(item => {
                    const inventoryItem = item
                    inventoryList.push(inventoryItem)
                })
                dispatch(fetchInventoryAction(inventoryList))
            })
        } catch(error){
            console.log(error.message)
        }
    }
}