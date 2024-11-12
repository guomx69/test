import logo from '../../apps/assets/images/Seal_of_the_United_States_Bureau_of_Indian_Affairs.svg';

export const AppRoles = {admin:"ADMIN", editor:"editor", visitor:"visitor"};

export const AppStatus = {isTesting:true,zoom:4,center:[-98,34]};

export const AppResource = {
  calciteCDN: "https://unpkg.com/@esri/calcite-components/dist/calcite/assets",
  themeCDN: "https://js.arcgis.com/4.28/esri/themes/light/main.css",
  logo: logo,
  arcgisApiKey: import.meta.env.VITE_ARCGIS_API_KEY
};

import esriConfig from "@arcgis/core/config";
esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY; // AppResource.arcgisApiKey;
//console.log(esriConfig.apiKey,"from esriConfig");