// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home          from './apps/pages/Home.jsx';
import About         from './apps/pages/About.jsx';
import Login         from './apps/pages/Login.jsx';
import AppHome       from './apps/pages/AppHome.jsx';
import Logout        from './apps/pages/logout.jsx';
import Forbidden     from './apps/pages/Forbidden.jsx';
import Reservations  from './apps/pages/Reservations.jsx';
import AppHelp       from './apps/pages/AppHelp.jsx';
import AppSearch     from './apps/pages/AppSearch.jsx';
import AppData       from './apps/pages/AppData.jsx';


//import AdminHome from '../../apps/admin/pages/AdminHome';
import UserManagement   from './apps/admin/pages/UserManagement.jsx';
import DataManagement   from './apps/admin/pages/DataManagement.jsx';
import DataViewer       from './apps/admin/pages/DataViewer.jsx';
import MapViewer        from './apps/admin/pages/MapViewer.jsx';
import Help             from './apps/admin/pages/Help.jsx';
import Settings         from './apps/admin/pages/Settings.jsx';

import  CompDataViewer  from './apps/components/DataViewer';

import { AppRoles } from './apps/config/config.jsx';

import  PublicLayout from './layouts/PublicLayout.jsx';
import { AppLayout }    from './layouts/AppLayout.jsx';
import AdminLayout      from './layouts/AdminLayout.jsx';

import { ProtectedAdminRoute } from './cores/security/ProtechedAdminRoute.jsx';
import { ProtectedRoute }      from './cores/security/ProtectedRoute.jsx';


import ApiDemo from './testDemo/apidemo.jsx';
import TestFeatureTable from './testDemo/demos/TestFeatureTable.jsx';

import { AuthMwArcgis } from './libs/hooks/AuthMwArcgis.jsx';//middleware for arcgis redirect url
import { AuthMwGmail } from './libs/hooks/AuthMwGmail.jsx';//middleware for gmail redirect
import { GmailLogin } from './testDemo/demos/gmailLogin/index.js';
import TestAuthArcGISToken from './testDemo/demos/TestAuthArcGISToken.jsx';
import TestAuth from './testDemo/demos/TestAuth.jsx';
import TestPkceApp from './testDemo/demos/TestPkceApp.jsx';



const AppRoutes = () => {
  return (
        <Routes>
          <Route path="/*" element={<PublicLayout />} future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true
          }} >
                {/* <Route index element={<CompDataViewer />} /> */}
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} /> 
                <Route path="forbidden" element={<Forbidden />} /> 
                <Route path="reservations" element={<Reservations />} /> 
                <Route path="dataviewer" element={<DataViewer />} />

                <Route path="ft" element={<TestFeatureTable />} />
             
                {/* <Route path="gmail" element={<GmailLogin />} /> 
                <Route path="arcgis" element={<TestAuthArcGISToken />} />
                <Route path="testauth" element={<TestAuth />} />
                <Route path="testpkce" element={<TestPkceApp />} />

                <Route path="authgmail" element={<AuthMwGmail />} />
                <Route path="autharcgis" element={<AuthMwArcgis />} /> */}
               
          </Route>
          {/* <Route path="/api/*"  >
               <Route index element={<ApiDemo />} />
               <Route path="users" element={<ApiDemo />} />
          </Route> */}
          <Route path="/app/*" element={<ProtectedRoute><AppLayout /></ProtectedRoute>} >
                    <Route index element={<AppHome />} />
                    <Route path="file" element={<AppHome />} />
                    <Route path="search" element={<AppSearch />} />
                    <Route path="data" element={<AppData />} />
                    <Route path="help" element={<AppHelp />} />
                    <Route path="about" element={<About />} />

                    <Route path="dataviewer" element={<DataViewer />} />
                    <Route path="mapviewer" element={<MapViewer />} />
          </Route>
          <Route path="/admin/*" element={<ProtectedAdminRoute  role={AppRoles.admin} ><AdminLayout /></ProtectedAdminRoute>}>
                    <Route index element={<CompDataViewer />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="data" element={<DataManagement />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} />
          </Route>
        
        </Routes>
  );
};

export default AppRoutes;
