import axios from 'axios';
import URLs from './url';
const API = axios.create({
    baseURL: URLs,
    timeout: 30000,
    headers: {
        'Content-Type':'application/json'
    }
});

export default API;