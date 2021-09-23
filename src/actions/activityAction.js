import * as actions from './actionTypes';
import taskstechApi from '../api/taskstechApi';

export const getActivities = (loading = true, id) => async dispatch => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const job = { // temp
        "job_id": id
    };

    try {
        taskstechApi.post(`/get_all_activity`,job , config)
            .then(res => {
                console.log(res)
                dispatch({
                    type: actions.GET_ACTIVITIES_STARTED,
                    loading: loading
                });
                if (res.data) {
                    dispatch({
                        type: actions.GET_ACTIVITIES,
                        payload: res.data,
                        loading: false
                    });
                }
                /**/
            })
    } catch (error) {
        console.log(error.message)
    }
}

export const getActivity = (loading = true) => async dispatch => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
        taskstechApi.get(`/activity/1`, config)
            .then(res => {
                dispatch({
                    type: actions.GET_ACTIVITY_STARTED,
                    loading: loading
                });
                if (res.data) {
                    dispatch({
                        type: actions.GET_ACTIVITY,
                        payload: res.data,
                        loading: false
                    });
                }
                /* */
            })
    } catch (error) {
        console.log(error.message)
    }


}


