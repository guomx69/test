// src/routes/ProtectedRouteAdmin.jsx
import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
//import LoadingSpinner from '../../libs/components/LoadingSpinner';
import { useAuth } from '../contexts/AuthContext';

export const ProtectedRouteAdmin = ({ children, role }) => {
 const {user} =useAuth();
 const location = useLocation();

  console.log("isAuth",user,"from ProtectedRouteAdmin");

  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/forbidden" state={{ from: location }} replace />; //back the original page for notlogined user
  }

  return children;
};