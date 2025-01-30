import { useEffect } from 'react';
import { googleTokenApi, googleUserApi } from '../utils/apiCalls';
import { LOCAL_STORAGE_KEYS, OAUTH_CONFIG } from '../../apps/config/config';
import { returnHome } from './authUtl';
export const AuthMwGmail = () => {

  useEffect(() => {
 
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      handleGoogleCallback(code);
    }
  }, []);

  const handleGoogleCallback = async (code) => {
    try {
      const formData = new URLSearchParams({
        code,
        client_id:OAUTH_CONFIG.GOOGLE.CLIENT_ID,
        client_secret:OAUTH_CONFIG.GOOGLE.CLIENT_SECRET,
        redirect_uri: OAUTH_CONFIG.GOOGLE.REDIRECT_URI,
        grant_type: OAUTH_CONFIG.GOOGLE.GRANT_TYPE
      });
      // Get token using googleTokenApi
      await googleTokenApi.post('/token', formData);
      
      // Get user info using googleUserApi
      await googleUserApi.get('/userinfo');

      returnHome(localStorage.getItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL));
      
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

export default AuthMwGmail;