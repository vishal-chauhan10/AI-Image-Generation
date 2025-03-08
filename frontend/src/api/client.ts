import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: async (username: string, password: string) => {
    const response = await api.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  },
  register: async (username: string, password: string) => {
    const response = await api.post('/auth/register', {
      username,
      password,
    });
    return response.data;
  },
};

export const scores = {
  create: async (score: number, prompt?: string, imageUrl?: string) => {
    const response = await api.post('/scores', {
      points: score,
      prompt,
      imageUrl,
    });
    return response.data;
  },
  getLeaderboard: async () => {
    const response = await api.get('/scores/leaderboard');
    return response.data;
  },
};

export default api; 