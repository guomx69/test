import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEYS, OAUTH_CONFIG } from '../../cores/config/config';

const defaultReturnUrl = window.location.href;
export const useGmailAuth = (returnUrl="") => {
  const [gmailUser, setGmailUser] = useState(null);
  const [gmailError, setGmailError] = useState(null);

   // Google OAuth2 configuration
  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.GOOGLE.USER);
    if (storedUser) {
      setGmailUser(JSON.parse(storedUser));
    }

      }, []);

  

     const handleGoogleLogin = () => {
        let customReturnUrl = returnUrl||window.location.href;
        localStorage.setItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL, customReturnUrl);
        
        const params = new URLSearchParams({
          client_id: OAUTH_CONFIG.GOOGLE.CLIENT_ID,
          redirect_uri: OAUTH_CONFIG.GOOGLE.REDIRECT_URI,
          response_type: OAUTH_CONFIG.GOOGLE.RESPONSE_TYPE,
          scope: OAUTH_CONFIG.GOOGLE.SCOPE,
          access_type: OAUTH_CONFIG.GOOGLE.ACCESS_TYPE,
          prompt: OAUTH_CONFIG.GOOGLE.PROMPT
        });
    
        window.location.href = `${OAUTH_CONFIG.GOOGLE.AUTH_URL}?${params.toString()}`;
      };

      const handleGoogleLogout = () => {
        setGmailUser(null);
        localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE.USER);
        localStorage.removeItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL);
      };
    

  return {
    gmailUser,
    gmailError,
    handleGoogleLogin,
    handleGoogleLogout
  };
};