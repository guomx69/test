// hooks/useSecureRequest.js
import { useState, useEffect } from 'react';
import { secureApiCall } from '../utils/security';

export const useSecureRequest = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await secureApiCall(url, {
        ...options,
        headers: {
          ...options.headers,
          'X-CSRF-Token': localStorage.getItem('csrf_token'),
        },
      });
      setData(response.data);
    } catch (err) {
      setError(err);
      // Implement proper error handling based on error types
      if (err.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('auth_token');
        window.location.href = '/login';
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading, refetch: fetchData };
};

