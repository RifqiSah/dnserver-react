import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rifqisah.com/v1/aisha',
});

export default instance;
