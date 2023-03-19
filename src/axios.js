import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rifqisah.com/v1/aisha',
    headers: {
        apikey: process.env.API_KEY,
    },
});

export default instance;
