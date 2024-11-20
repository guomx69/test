import React from 'react';
import { useGmailAuth } from '../../../libs/hooks/useGmailAuth';
import LoginButton from './components/LoginButton';
import UserInfo from './components/UserInfo';
import ErrorMessage from './components/ErrorMessage';


const TestGmailLogin = () => {
  const { gmailUser, gmailError, handleGoogleLogin,handleGoogleLogout } = useGmailAuth();
  console.log('user token',gmailUser?.access_token);

  return (
    <div className="auth-container">
      <h2>Gmail Authentication</h2>
      
      {gmailError && <ErrorMessage message={gmailError} />}

      {!gmailUser ? (
        <LoginButton onLogin={handleGoogleLogin} />
      ) : (
        <UserInfo user={gmailUser} onLogout={handleGoogleLogout} />
      )}
    </div>
  );
};

export default TestGmailLogin; 