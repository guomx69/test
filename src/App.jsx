// src/App.jsx
import React from 'react';


import AppRoutes from './cores/routes/AppRoutes';
import { AppResource } from './cores/config/config';


import './apps/assets/styles/index.css';
import { setAssetPath } from "@esri/calcite-components/dist/components";// CDN hosted assets
setAssetPath(AppResource.calciteCDN); 
//import "@esri/calcite-components/dist/calcite/calcite.css";
//import './apps/assets/styles/calcite.css'; not working
//setAssetPath(AppResource.mapComponentsCDN); not working

const App = () => {
  return (
       <AppRoutes />
  );
};
export default App;
