import React from 'react';

const LoginButton = ({ onLogin }) => (
  <>
    <button onClick={onLogin} className="gmail-login-button">
      Sign in with Gmail
    </button>
  </>
);

export default LoginButton; 