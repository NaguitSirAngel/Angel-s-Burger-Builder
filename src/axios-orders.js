import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://react-angel-s-burger-builder-default-rtdb.firebaseio.com/'
});

export default instance;