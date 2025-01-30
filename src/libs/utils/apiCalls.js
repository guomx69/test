import axios from 'axios';
import { toast } from 'react-toastify';
import { SecurityUtils, customToastStyles } from './apiSecurity';
import { OAUTH_CONFIG, LOCAL_STORAGE_KEYS } from '../../apps/config/config';

/**
 * Axios instance with default configuration
 * @type {import('axios').AxiosInstance}
 */
const ExpressServerApis = axios.create({
  baseURL: import.meta.env.VITE_USERAPI_URL,
  timeout: 5000,
  //withCredentials: true,
  headers: {
      'Content-Type': 'application/json',
      //'X-CSRF-Token': localStorage.getItem('csrf_token'), //request header,with server side framework support
      // 'X-Content-Type-Options': 'nosniff',//response header  
      // 'X-Frame-Options': 'DENY',//response header
      // 'X-XSS-Protection': '1; mode=block',//response header
    }
 });
ExpressServerApis.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    toast.error(error.message, {
      style: customToastStyles.error.style,
      progressStyle: customToastStyles.error.progressStyle,
    });
    return Promise.reject(error);
  }
);
ExpressServerApis.interceptors.response.use(
  (response) => response,
  (error) => {
    toastHandler(error);
    return Promise.reject(error);
  }
);


// Axios instance for Google token endpoint
const googleTokenApi = axios.create({
  baseURL: OAUTH_CONFIG.GOOGLE.TOKEN_URL,
  //withCredentials: true,
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
});
// Add request interceptor for token API
googleTokenApi.interceptors.request.use(
  (config) => {
    // Add any necessary headers or modifications for token requests
    config.headers['Accept'] = 'application/json';
    return config;
  },
  (error) => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.USER);
    toastHandler(error);
    return Promise.reject(error);
 });
// Add response interceptor for token API
googleTokenApi.interceptors.response.use(
  (response) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.GOOGLE.TOKEN, response.data.access_token);
    return response;
  },
  async (error) => {
    if (error.response?.status === 400) {
      // Handle invalid grant or other token-related errors
      localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.USER);
      const errorMessage = error.response?.data?.error_description || 'Token request failed';
      console.error('Token Error:', errorMessage);
    }
    toastHandler(error);
    return Promise.reject(error);
  }
);



// Axios instance for Google user info endpoint
const googleUserApi = axios.create({
  baseURL: OAUTH_CONFIG.GOOGLE.USERINFO_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
// Add request interceptor for user API
googleUserApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.GOOGLE.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.USER);
    toastHandler(error);
    return Promise.reject(error);
  }
 );
// Add response interceptor for user API
googleUserApi.interceptors.response.use(
  (response) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.GOOGLE.USER, JSON.stringify(response.data));
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.USER);
      window.location.href = '/login';
    }
    toastHandler(error);
    return Promise.reject(error);
  }
);
const toastHandler = (error) => {
  toast.error(error.message, {
    style: customToastStyles.error.style,
    progressStyle: customToastStyles.error.progressStyle,
  });
}

export { ExpressServerApis, googleTokenApi, googleUserApi };
