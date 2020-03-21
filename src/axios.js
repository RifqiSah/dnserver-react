import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://alriftech.com/api/v2/bot/aisha'
});

export default instance;