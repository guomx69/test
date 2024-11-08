import React from 'react';
import { useAuth } from '../../../cores/contexts/AuthContext';

function AdminHome() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, User::{user?.name} with role:: {user?.role}!</p>
      <p>This is your admin dashboard where you can manage the application.</p>
    </div>
  );
}

export default AdminHome;