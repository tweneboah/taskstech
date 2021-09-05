import * as actions from './actionTypes';
import taskstechApi from '../api/taskstechApi';
import { fetchInventoryAction} from './inventoryActions'
// import {useSelector } from 'react-redux'
import taskstechApi from '../api/taskstechApi';
import {signInAction, signOutAction, setTraderData} from './traderActions';
import {push} from 'connected-react-router';
// import { getTraderId } from '../selector/userSelector';



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
    }}


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




// Traders Actions

export const signUp = (firstname, lastname,  email, password, confirmPassword, description, phone) => {
    return async (dispatch) =>{
        const traderSignUpData = {
            email:email,
            password:password,
            first_name:firstname,
            last_name:lastname,
            description:description,
            phone:phone
        }
        console.log(traderSignUpData)
         try {
              taskstechApi.post('users/tradesperson', traderSignUpData)
            .then(res =>{
                console.log(res)
                dispatch(push('/login'))
            })
        } catch(error){
            console.log(error.message)
        }
    }
}

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            taskstechApi.post(`/tokens`, {},
          {auth: {
              username: email,
              password: password,
            }}
            )
          .then(res =>{
              console.log(res)
              localStorage.setItem("token", res.data.token)
              localStorage.setItem("id", res.data.user_id)
              dispatch(signInAction({
                  isSignedIn:true,
                  id:res.data.user_id,
              }))
              getTraderData()
              dispatch(push('/tradie/profile'))
          })
      } catch(error){
          console.log(error.message)
      }
    }
}

export const getTraderData = () => {
    return async (dispatch) => {
    //  const selector = useSelector(state => state.trader)
    //  const id = getTraderId(selector)
    const id = localStorage.getItem('id')
     const token = localStorage.getItem('token');
     try {
        taskstechApi.get(`/users/tradesperson/${id}`, {
            headers:{authorization:`Bearer ${token}`}
        })
      .then(res =>{
          dispatch(setTraderData({
              firstname:res.data.first_name,
              lastname:res.data.last_name,
              email:res.data.email,
              phone:res.data.phone,
              description:res.data.description,
          })
      )})
    } catch(error){
        console.log(error.message)
    }
  }
}

export const updateTrader = (firstname, lastname,  email, password, description, phone) => {
    return async () => {
        // const selector = useSelector(state => state)
        // const id = getTraderId(selector)
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token');
        const traderSignUpData = {
            first_name:firstname,
            last_name:lastname,
            email:email,
            password:password,
            description:description,
            phone:phone
        }
        try {
            taskstechApi.put(`/users/tradesperson/${id}`, traderSignUpData, {
                  headers:{authorization:`Bearer ${token}`}
              })
            
            .then(res =>{
                console.log(res)
                alert ("Your Profile has been updated!")
            })
        } catch(error){
            console.log(error.message)
        }
    }
}


export const signOut = () => {
    return async (dispatch) => {
            dispatch(signOutAction());
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            dispatch(push('/login'));
    }
}
