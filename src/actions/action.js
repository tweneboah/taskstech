import * as actions from './actionTypes';
import taskstechApi from '../api/taskstechApi';


export const createJob = (job) => async dispatch => {
    await taskstechApi
        .post('/job', job)
        .then(() => {
            dispatch({ type: actions.ADD_JOB, payload: job });
        }).catch(e => {
            console.log(e)
        });

}

export const getStatus = () => async dispatch => {
    const response = await taskstechApi.get('/lists');

    dispatch({ type: actions.GET_JOB_STATUS, payload: response.data.job_status });
}

