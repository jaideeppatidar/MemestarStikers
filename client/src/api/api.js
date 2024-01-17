// api.js
import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
export const fetchNewsFeed = () => {
    return api.get('/news-feed');
};
export const uploadFeedItem = (data) => {
    return api.post('/upload', data);
};
export default api;
