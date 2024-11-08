// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export const ProtectedRoute = ({ children}) => {
  const {user} = useAuth();
  const location = useLocation();



  console.log("user",user,"from ProtectedRoute");
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(!user.resrvRights)
    return <Navigate to="/reservations" state={{ from: location }} replace />;

  return children;
};