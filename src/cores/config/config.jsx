import logo from '../../apps/assets/images/Seal_of_the_United_States_Bureau_of_Indian_Affairs.svg';

export const AppRoles = {admin:"ADMIN", editor:"EDITOR", visitor:"VISITOR"};

export const AppStatus = {isTesting:true,zoom:4,center:[-98,34]};

export const AppResource = {
  calciteCDN: "https://unpkg.com/@esri/calcite-components/dist/calcite/assets",
  themeCDN: "https://js.arcgis.com/4.28/esri/themes/light/main.css",
  logo: logo,
  arcgisApiKey: import.meta.env.VITE_ARCGIS_API_KEY
};

import esriConfig from "@arcgis/core/config";
esriConfig.apiKey = AppResource.arcgisApiKey;
//console.log(esriConfig.apiKey,"from esriConfig");
export const LOCAL_STORAGE_KEYS = {
  CUSTOM_AUTH_URL: 'custom_auth_url',
  GOOGLE:{
    USER: 'google_user',
    TOKEN: 'google_token'
  },
  ARCGIS:{
    USER: 'arcgis_user',
    TOKEN: 'arcgis_token'
  }
};

export const OAUTH_CONFIG = {
  GOOGLE: {
    TOKEN_URL: 'https://oauth2.googleapis.com',
    AUTH_URL: 'https://accounts.google.com/o/oauth2/v2/auth',
    USERINFO_URL: 'https://www.googleapis.com/oauth2/v2',
    SCOPE: 'email profile',
    REDIRECT_URI: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
    CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    CLIENT_SECRET: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
    GRANT_TYPE: 'authorization_code',
    RESPONSE_TYPE: 'code',
    ACCESS_TYPE: 'offline',
    PROMPT: 'consent'
  },
  ARCGIS: {
    // TOKEN_URL: 'https://www.arcgis.com/sharing/rest/oauth2/arcgis',
    // AUTH_URL: 'https://www.arcgis.com/sharing/rest/oauth2/arcgis/authorize',
    CLIENT_ID: import.meta.env.VITE_ARCGIS_CLIENT_ID,
    REDIRECT_URI: import.meta.env.VITE_ARCGIS_REDIRECT_URI,
    CLIENT_SECRET: import.meta.env.VITE_ARCGIS_CLIENT_SECRET
  }
};