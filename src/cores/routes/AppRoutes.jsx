// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home          from '../../apps/pages/Home';
import About         from '../../apps/pages/About';
import Login         from '../../apps/pages/Login';
import AppHome       from '../../apps/pages/AppHome';
import Logout        from '../../apps/pages/logout';
import Forbidden     from '../../apps/pages/Forbidden.jsx';
import Reservations  from '../../apps/pages/Reservations.jsx';
import AppHelp       from '../../apps/pages/AppHelp.jsx';
import Search        from '../../apps/pages/Search.jsx';
import AppDataList   from '../../apps/pages/AppDataList.jsx';


//import AdminHome from '../../apps/admin/pages/AdminHome';
import UserManagement   from '../../apps/admin/pages/UserManagement.jsx';
import DataManagement   from '../../apps/admin/pages/DataManagement.jsx';
import DataViewer       from '../../apps/admin/pages/DataViewer.jsx';
import MapViewer        from '../../apps/admin/pages/MapViewer.jsx';
import Help             from '../../apps/admin/pages/Help.jsx';
import Settings         from '../../apps/admin/pages/Settings.jsx';



import { AppRoles } from '../config/config';

import { PublicLayout } from '../layouts/PublicLayout';
import { AppLayout }    from '../layouts/AppLayout';
import AdminLayout      from '../layouts/AdminLayout';

import { ProtectedRouteAdmin } from '../security/ProtechedRouteAdmin';
import { ProtectedRoute }      from '../security/ProtectedRoute';

import { GmailLogin } from '../../test/demos/gmailLogin';
//import LoginTest   from '../../test/LoginTest';
import WebMapId from '../../test/demos/WebMapId.jsx';
//import TestAuthGmailToken from '../../test/TestAuthGmailToken';
//import TestAuthGmailAccount from '../../test/TestAuthGmailAccount';
import TestAuth from '../../test/demos/TestAuth.jsx';
import { AuthMwArcgis } from '../../libs/hooks/AuthMwArcgis.jsx';
import { AuthMwGmail } from '../../libs/hooks/AuthMwGmail.jsx';
import TestAuthArcGISToken from '../../test/demos/gmailLogin/TestAuthArcGISToken.jsx';

const AppRoutes = () => {
  return (
        <Routes>
          <Route path="/*" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} /> 
                <Route path="forbidden" element={<Forbidden />} /> 
                <Route path="reservations" element={<Reservations />} /> 
             
                <Route path="gmail" element={<GmailLogin />} /> 
                <Route path="arcgis" element={<TestAuthArcGISToken />} /> 
                <Route path="webmap" element={<WebMapId  />} /> 
                <Route path="authgmail" element={<AuthMwGmail />} />
                <Route path="autharcgis" element={<AuthMwArcgis />} />
                <Route path="testauth" element={<TestAuth />} />
          </Route>
          <Route path="/app/*" element={<ProtectedRoute><AppLayout /></ProtectedRoute>} >
                    <Route index element={<AppHome />} />
                    <Route path="search" element={<Search />} />
                    <Route path="dataList" element={<AppDataList />} />
                    <Route path="help" element={<AppHelp />} />
                    <Route path="about" element={<About />} />
                </Route>
          <Route path="/admin/*" element={<ProtectedRouteAdmin  role={AppRoles.admin} ><AdminLayout /></ProtectedRouteAdmin>}>
                    <Route index element={<UserManagement />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="data" element={<DataManagement />} />
                    <Route path="dataviewer" element={<DataViewer />} />
                    <Route path="mapviewer" element={<MapViewer />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} />
          </Route>
        
        </Routes>
  );
};

export default AppRoutes;
