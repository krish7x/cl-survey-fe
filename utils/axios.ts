import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create({
  baseURL: '/api',
});

export const axiosInstance = setupCache(instance);
