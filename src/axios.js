import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rifqisah.com/bot/aisha'
});

export default instance;