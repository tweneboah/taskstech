import axios from 'axios';

const taskstechApi = axios.create({
    baseURL:"https://taskstech2.pythonanywhere.com/api/v1/",
    // headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_TASKSTECH_TOKEN}`
    // }
});

export default taskstechApi;