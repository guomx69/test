import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleLogin,googleLogout } from '@react-oauth/google';

const TestAuthGmailToken = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const onSuccess = (response) => {
    // Save user data to state and local storage
    console.log('Google Login successful:', response);
    setUser(response.credential);
    localStorage.setItem('user', JSON.stringify(response.credential));
  };

  const onFailure = (error) => {
    console.error('Google Login failed:', error);
  };

  const logout = () => {
    // Remove user data from state and local storage
    setUser(null);
    localStorage.removeItem('user');
    googleLogout();
  };

  const makeApiCall = async () => {
    try {
      const response = await axios.get('https://api.agify.io/?name=meelad', {
        headers: {
          Authorization: `Bearer ${user.tokenId}`
        }
      });
      console.log('API response:', response.data);
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user}!</h1>
          <button onClick={makeApiCall}>Call Protected API</button>
          <div onClick={logout}>          
            Logout
          </div>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onFailure}
        />
      )}
    </div>
  );
};

export default TestAuthGmailToken;

//pure react client web app use AcrGIS online account for authenticaion using axios
//https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-OAuthInfo.html