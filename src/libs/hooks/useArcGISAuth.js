import { useState, useEffect } from 'react';
import { UserSession } from '@esri/arcgis-rest-auth';
import { LOCAL_STORAGE_KEYS, OAUTH_CONFIG } from '../../cores/config/config';
export const useArcGISAuth = (returnUrl='') => {
  const [arcgisUser, setArcGisUser] = useState(null);
  const [arcgisError, setArcGisError] = useState(null);
  
  
  useEffect(() => {
    // Check for callback data in URL hash
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEYS.ARCGIS.USER);
    if (storedData) {
      setArcGisUser(JSON.parse(storedData));
    }
    
  }, []);

  const handleArcGISLogin = async () => {
    try { 
      let customReturnUrl = returnUrl||window.location.href;
      localStorage.setItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL, customReturnUrl);
      //console.log('customReturnUrl', customReturnUrl);
      await UserSession.beginOAuth2({
        clientId:OAUTH_CONFIG.ARCGIS.CLIENT_ID,
        redirectUri:OAUTH_CONFIG.ARCGIS.REDIRECT_URI,
        popup: false,
      });
    } catch (err) {
      console.error('Login Error:', err);
      setArcGisError(err.message);
    }
  };

  const handleLogout = () => {
    setArcGisUser(null);

    localStorage.removeItem(LOCAL_STORAGE_KEYS.ARCGIS.USER);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ARCGIS.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL);
  };

  return {
    arcgisUser,
    arcgisError,
    handleArcGISLogin,
    handleLogout
  };
}; 