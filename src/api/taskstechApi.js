import axios from 'axios';
const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMSwiZXhwIjoxNjI2NTAyMjExfQ.i9E85u3U72x_amkKriiBL5HArbMX5k4l_rFgcXiq09g';

const taskstechApi = axios.create({
    baseURL:"https://taskstech2.pythonanywhere.com/api/v1/",
    headers: {
        Authorization: `Bearer ${authToken}`
    }
});

export default taskstechApi;