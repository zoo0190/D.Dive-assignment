import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ddive.co:4000/api/v1.0/',
});

export const dashboardApi = () => api.get('dashboard');
