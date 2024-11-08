// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppResource } from './cores/config/config';

import Home from './apps/pages/Home';
import About from './apps/pages/About';
import Login from './apps/pages/Login';
import AdminHome from './apps/admin/pages/AdminHome';
import UserManagement from './apps/admin/pages/UserManagement.jsx';
import AppHome from './apps/pages/AppHome';
import Logout from './apps/pages/logout';
import Forbidden from './apps/pages/Forbidden.jsx';
import Reservations from './apps/pages/Reservations.jsx';
import DataManagement from './apps/admin/pages/DataManagement.jsx';
import DataViewer from './apps/admin/pages/DataViewer.jsx';
import MapViewer from './apps/admin/pages/MapViewer.jsx';
import Help from './apps/admin/pages/Help.jsx';
import Settings from './apps/admin/pages/Settings.jsx';
import Search from './apps/pages/Search.jsx';
import AppDataList from './apps/pages/AppDataList.jsx';
import AppHelp from './apps/pages/AppHelp.jsx';

import { AppRoles } from './cores/config/config';

import { PublicLayout } from './cores/layouts/PublicLayout';
import { AppLayout } from './cores/layouts/AppLayout';
import AdminLayout from './cores/layouts/AdminLayout';

import { ProtectedRouteAdmin } from './cores/security/ProtechedRouteAdmin';
import { ProtectedRoute } from './cores/security/ProtectedRoute';


import { setAssetPath } from "@esri/calcite-components/dist/components";// CDN hosted assets
setAssetPath(AppResource.calciteCDN); 
//import "@esri/calcite-components/dist/calcite/calcite.css";
//import './apps/styles/calcite.css'; not working
//setAssetPath(AppResource.mapComponentsCDN); not working

import './apps/styles/index.css';

const App = () => {
  return (
        <Routes>
          <Route path="/*" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} /> 
                <Route path="forbidden" element={<Forbidden />} /> 
                <Route path="reservations" element={<Reservations />} /> 
          </Route>
          <Route path="/app/*" element={<ProtectedRoute><AppLayout /></ProtectedRoute>} >
                    <Route index element={<AppHome />} />
                    <Route path="search" element={<Search />} />
                    <Route path="dataList" element={<AppDataList />} />
                    <Route path="help" element={<AppHelp />} />
                    <Route path="about" element={<About />} />
                </Route>
          <Route path="/admin/*" element={<ProtectedRouteAdmin  role={AppRoles.admin} ><AdminLayout /></ProtectedRouteAdmin>}>
                    <Route index element={<AdminHome />} />
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

export default App;
