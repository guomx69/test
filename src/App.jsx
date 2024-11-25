// src/App.jsx
import React from 'react';

import AppRoutes from './cores/routes/AppRoutes';
import { AppResource } from './cores/config/config';
//import { EsriAuthProvider } from './cores/contexts/EsriAuthContext';
import { AuthProvider } from './cores/contexts/AuthContext';


import './apps/assets/styles/index.css';
import { setAssetPath } from "@esri/calcite-components/dist/components";// CDN hosted assets
setAssetPath(AppResource.calciteCDN); 
//import "@esri/calcite-components/dist/calcite/calcite.css";
//import './apps/assets/styles/calcite.css'; not working
//setAssetPath(AppResource.mapComponentsCDN); not working


const App = () => {
  return (
    //<EsriAuthProvider>
      <AuthProvider>
        
         
          <AppRoutes />
      
      </AuthProvider>
    //</EsriAuthProvider>
  );
};
export default App;
