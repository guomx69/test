import { useEffect } from "react";
import { returnHome } from "./authUtl";
import { LOCAL_STORAGE_KEYS } from '../../cores/config/config';

export const AuthMwArcgis = () => {
  useEffect(() => {
       const returnUrl = localStorage.getItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL)||"/";
       
      if (window.location.hash) {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const tokenData = {
          access_token: hashParams.get('access_token'),
          expires_in: hashParams.get('expires_in'),
          username: hashParams.get('username'),
          ssl: hashParams.get('ssl'),
        };

        localStorage.setItem(LOCAL_STORAGE_KEYS.ARCGIS.USER, JSON.stringify(tokenData));
        localStorage.setItem(LOCAL_STORAGE_KEYS.ARCGIS.TOKEN, tokenData.access_token);
        returnHome(returnUrl);
      }
    
    else {
     
      returnHome(returnUrl);
    }

  }, []);
}       