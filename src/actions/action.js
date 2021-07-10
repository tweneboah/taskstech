import axios from 'axios';
import * as actions from './actionTypes';

/* Create Action Creator for Adding New Jobs*/


export const getStatus = () => async dispatch =>  {
    const response = await axios.get('https://taskstech2.pythonanywhere.com/api/v1/lists');

    dispatch({ type: actions.GET_JOB_STATUS, payload: response.data.job_status });
}

