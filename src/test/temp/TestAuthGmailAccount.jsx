import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestAuthGmailAccount = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Google OAuth2 configuration
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = window.location.origin;
  console.log('REDIRECT_URI',REDIRECT_URI);
  const SCOPE = 'email profile';

  useEffect(() => {
    // Check if there's an authentication code in the URL
    const urlParams = new URLSearchParams(window.location.search);
    console.log('urlParams',urlParams);
    const code = urlParams.get('code');
    console.log('code',code);

    if (code) {
      handleGoogleCallback(code);
    }
  }, []);

  const handleGoogleLogin = () => {
    localStorage.setItem(CUSTOM_AUTH_URL, window.location);
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&access_type=offline&prompt=consent`;
     window.location.href = googleAuthUrl;
  };

  const handleGoogleCallback = async (code) => {
    try {
      console.log('handleGoogleCallback',code);
      // Exchange the authorization code for tokens
      const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
        code,
        client_id: CLIENT_ID,
        client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      });

      const { access_token } = tokenResponse.data;
      console.log('access_token',access_token);
      // Get user information using the access token
      const userResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setUser(userResponse.data);
      localStorage.setItem('user', JSON.stringify(userResponse.data));
      
    } catch (err) {
      setError(err.message);
      console.error('Authentication Error:', err);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="auth-container">
      <h2>Gmail Authentication Test</h2>
      
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {!user ? (
        <button onClick={handleGoogleLogin}>
          Sign in with Gmail
        </button>
      ) : (
        <div className="user-info">
          <h3>User Information</h3>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <img src={user.picture} alt="Profile" />
          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default TestAuthGmailAccount; 