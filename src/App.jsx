// src/App.jsx
import React, { useEffect } from 'react';

import AppRoutes from './AppRoutes';
import { AppResource } from './apps/config/config';
import { AuthProvider } from './cores/contexts/AuthContext';
import { OAuth2PKCEProvider } from './testDemo/demos/testbase/OAuth2PKCEContext';
import { setAssetPath } from "@esri/calcite-components/dist/components";// CDN hosted assets
setAssetPath(AppResource.calciteCDN); 

//import "@esri/calcite-components/dist/calcite/calcite.css";
//import './apps/assets/styles/calcite.css'; not working
//setAssetPath(AppResource.mapComponentsCDN); not working


const App = () => {
 
  return (
     
      <AuthProvider>
        <OAuth2PKCEProvider>
        <AppRoutes />
        </OAuth2PKCEProvider> 
      </AuthProvider>
     
  );
};
export default App;
