import React from 'react';
import { useArcGISAuth } from '../../../libs/hooks/useArcGISAuth';

const TestAuthArcGISToken = () => {
  const { 
    arcgisUser, 
    arcgisError, 
    handleArcGISLogin, 
    handleLogout 
  } = useArcGISAuth();

  // If we're on the callback page, show the token data
  if (arcgisUser) {
    return (
      <div className="auth-container">
        <h2>ArcGIS Authentication Callback</h2>
        <div className="callback-data">
          <h3>Callback Data:</h3>
          <pre>{JSON.stringify(arcgisUser, null, 2)}</pre>
          <button onClick={handleLogout} className="logout-button">
            Clear Data
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h2>ArcGIS Authentication</h2>
      
        {arcgisError && (
        <div className="error-message">
          Error: {arcgisError}
        </div>
      )}

      <button onClick={handleArcGISLogin} className="login-button">
        Sign in with ArcGIS Online
      </button>
    </div>
  );
};

export default TestAuthArcGISToken;

