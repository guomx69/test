import React, { useEffect } from 'react';
import { useAuth } from '../../cores/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout=()=> {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
      logout();
      navigate("/")
    }, []);

  return (
    <div className="login-page">Log Out Now!!</div>
  );
}

export default Logout;
