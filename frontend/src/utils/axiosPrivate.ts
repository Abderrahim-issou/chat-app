import axios from "axios";


const baseURL = 'http://localhost:5000/chat-app';

const axiosPrivate = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default axiosPrivate;
