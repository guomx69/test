export const AppRoles = {admin:"ADMIN", editor:"editor", visitor:"visitor"};

export const AppStatus = {isTesting:true,zoom:5,center:[-91,40]};

export const AppResource = {
  calciteCDN: "https://js.arcgis.com/calcite-components/2.13.2/assets",
             //https://js.arcgis.com/calcite-components/2.13.2/calcite.css
  mapComponentsCDN: "https://js.arcgis.com/map-components/4.30/assets",
  
  logo: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/DOI_Logo_rgb.jpg",
  arcgisApiKey: "AAPTxy8BH1VEsoebNVZXo8HurNd5QB4s805Bi8EOkZDDoANgYaNyp1XdhfNP5ZzX0WaPDTzVF3q6ew_Y84PIamx7vjpNBLHs01qbuA2lJWdBF8oOtr3zR7Kfl0-e4Ve2IiUEh7W9pFFOogBj3_ZAfpSuFrFgBg3QBb-t3_EmbfRwmObk8NNhcpqadu218iiPWUFnNz6n2C8Xn3f7ppWZJmMm3J_FcFFpu0JmmE_ZSbzTCK4.AT1_l28WjdGk"
};

export const MapServices = {
  regions: {
    url: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_RegionBoundaries_01/MapServer',
    title: 'USFS Regions',
    opacity: 0.8,
    visible: false
  },
  tribalLands: {
    url: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_TribalIndianLands_01/MapServer',
    title: 'Tribal Indian Lands',
    opacity: 0.6,
    visible: false
  },
  tribalCessions: {
    url: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_TribalCessionLands_01/MapServer',
    title: 'Indian Land Cessions',
    opacity: 0.5,
    visible: false
  }
};
export const FeatureServices ={
  federalIndianReservations: {
  url:"https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/Federal_American_Indian_Reservations_v1/FeatureServer",
  title:"Federal Indian Reservations",
  opacity: 0.5,
    visible: true
  }
};


// Configure ArcGIS API
import esriConfig from "@arcgis/core/config";
esriConfig.apiKey = AppResource.arcgisApiKey;