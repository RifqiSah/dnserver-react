import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rifqisah.com/v1/shorekeeper',
});

export default instance;
