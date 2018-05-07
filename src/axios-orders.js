import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://xugetsu-portfolio.firebaseio.com/'
});

export default instance;