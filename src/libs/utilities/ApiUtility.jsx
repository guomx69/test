import axios from 'axios';

/**
 * Axios instance with default configuration
 * @type {import('axios').AxiosInstance}
 */

console.log(process.env.NODE_ENV)
console.log(import.meta.env.VITE_USERAPI_URL);
console.log(process.env.NODE_ENV)



const apiUser = axios.create({
  baseURL: import.meta.env.VITE_USERAPI_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiUser.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const apiUserWithToken = axios.create({
    baseURL: import.meta.env.VITE_USERAPI_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  // Request interceptor for authentication
  apiUserWithToken.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export { apiUser, apiUserWithToken };
