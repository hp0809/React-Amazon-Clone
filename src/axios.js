import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-c02a7.cloudfunctions.net/api'
    //'http://localhost:5001/clone-c02a7/us-central1/api' // api url cloud function
});

export default instance;

