import axios from 'axios';
import { toast } from 'react-toastify';
import { SecurityUtils } from './apiSecurity';
/**
 * Axios instance with default configuration
 * @type {import('axios').AxiosInstance}
 */

console.log(process.env.NODE_ENV)
console.log(import.meta.env.VITE_USERAPI_URL);
console.log(process.env.NODE_ENV)

const customToastStyles = {
  error: {
    style: {
      background: '#FEE2E2',
      color: '#991B1B',
      border: '1px solid #F87171',
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    },
    progressStyle: {
      background: '#F87171',
    },
  },
  success: {
    style: {
      background: '#DCFCE7',
      color: '#166534',
      border: '1px solid #4ADE80',
    },
    progressStyle: {
      background: '#4ADE80',
    },
  },
};

/**
 * Axios instance with default configuration
 * @type {import('axios').AxiosInstance}
 */
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
    toast.error(error.message, {
      style: customToastStyles.error.style,
      progressStyle: customToastStyles.error.progressStyle,
    });
    return Promise.reject(error);
  }
);
apiUser.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.message, {
      style: customToastStyles.error.style,
      progressStyle: customToastStyles.error.progressStyle,
    });
    return Promise.reject(error);
  }
);




/**
 * Axios instance with token authentication
 * @type {import('axios').AxiosInstance}
 */
const apiUserWithSecurity = axios.create({
    baseURL: import.meta.env.VITE_USERAPI_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': localStorage.getItem('csrf_token'),
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    }
  });
  
  // Request interceptor for authentication
  apiUserWithSecurity.interceptors.request.use(
    (config) => {
          // Must read token from storage
      const token = localStorage.getItem('auth_token');// or const token = document.cookie.match(/token=(.*?);/)?.[1];
      if (token && SecurityUtils.validateToken(token)) {
        config.headers.Authorization = `Bearer ${token}`;
      }
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
  apiUserWithSecurity.interceptors.response.use(
    async (response) => {
      const { token } = await response.json();
    
      // VULNERABLE: Token must be stored where JavaScript can read it
      localStorage.setItem('token', token); // or document.cookie = `token=${token}; Secure; SameSite=Strict`;
      return response;
     },
    (error) => {
      const message = error.response?.data?.message || error.message;
      
      toast.error(message, {
        style: customToastStyles.error.style,
        progressStyle: customToastStyles.error.progressStyle,
      });
  
      return Promise.reject(error);
    }
  );
export { apiUser, apiUserWithSecurity };
