import axios from 'axios';

const instance = axios.create({
    //The API (cloud function) URL
    baseURL: 'https://us-central1-clone-7310d.cloudfunctions.net/api' //Live url from Cloud functions (firebase)
    // 'http://localhost:5001/clone-7310d/us-central1/api'
});

export default instance;