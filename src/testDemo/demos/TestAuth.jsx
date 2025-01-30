import React from 'react';
import { useArcGISAuth } from '../../libs/hooks/useArcGISAuth';
import { useGmailAuth } from '../../libs/hooks/useGmailAuth';
import './gmailLogin/styles/TestGmailLogin.css';


const TestAuth = () => {
  const { arcgisUser, arcgisError, handleArcGISLogin, handleLogout } = useArcGISAuth();
  const { gmailUser, gmailError, handleGoogleLogin, handleGoogleLogout } = useGmailAuth();

  // If we're on the callback page, show the token data

  return (
    <div className="test-auth-container">
      <h2>Test Authentication</h2>
      
      {arcgisError && (
        <div className="error-message">
          Error: {arcgisError}
        </div>
      )}
      {gmailError && (
        <div className="error-message">
          Error: {gmailError}
        </div>
      )}    
      {arcgisUser ? (
            <div className="test-auth-container">
              <h2>ArcGIS Authentication Callback</h2>
              <div className="callback-data">
                <h3>Callback Data:</h3>
                <pre>{JSON.stringify(arcgisUser, null, 2)}</pre>
                <button onClick={handleLogout} className="logout-button">
                  Clear Data
                </button>
              </div>
            </div>
        ):<button onClick={handleArcGISLogin} className="test-login-button">
               Sign in with ArcGIS Online      </button>
      }
      <br /><br />
      {gmailUser? (
                <div className="test-user-info">
                <h3>Gmail User Information</h3>
                <p>Email: {gmailUser.email}</p>
                <p>Name: {gmailUser.name}</p>
                <img src={gmailUser.picture} alt="Profile" />
                <button onClick={handleGoogleLogout} className="logout-button">
                  Logout
                </button>
              </div>
              ):  <button onClick={handleGoogleLogin} className="test-login-button">
                  Sign in with Gmail
                 </button>
       }
    
    </div>
  );
};

export default TestAuth;

