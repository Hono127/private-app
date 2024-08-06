import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // APIのベースURLを設定
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;