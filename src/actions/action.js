import * as actions from './actionTypes';
import taskstechApi from '../api/taskstechApi';


export const createJob = (job, loading) => async dispatch => {
    dispatch({ type: actions.CREATE_JOB_STARTED, loading: loading });

    await taskstechApi
        .post('/job', job)
        .then(() => {
            dispatch({ type: actions.CREATE_JOB, payload: job,  loading: false });
        }).catch(e => {
            console.log(e)
        });
}

export const getJobs = (page = 1, loading = true) => async dispatch => {
    const { data } = await taskstechApi.get(`/job?${page}`);
    
    dispatch({ type: actions.GET_JOBS_STARTED, loading: loading });
    
    if(data) {
        dispatch({ type: actions.GET_JOBS, payload: data.items, loading: false});
    }
    
}


export const getStatus = () => async dispatch => {
    const { data } = await taskstechApi.get('/lists');

    dispatch({ type: actions.GET_JOB_STATUS_STARTED, loading: true });
    
    if (data) {
        dispatch({ type: actions.GET_JOB_STATUS, payload: data.job_status, loading: false });
    }
}