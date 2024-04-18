import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://api.openweathermap.org',
    headers: {
      'Content-Type': 'application/json'
    }
});

export default apiClient