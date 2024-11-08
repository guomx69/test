import React from 'react';
import { useAuth } from '../../cores/contexts/AuthContext';

// import "@esri/calcite-components/dist/calcite/calcite.css";

function AppHome() {
  const { user } = useAuth();
  console.log(user,user.reservations)
 
  return (
    <div>
      <h1>Welcome to NioGEMS App {user.name}</h1>
      </div>
  );
}
export default AppHome;

