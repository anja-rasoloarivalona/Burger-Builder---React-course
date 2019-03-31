import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-4c1e6.firebaseio.com/'
})

export default instance;