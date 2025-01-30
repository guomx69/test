import React, { createContext, useContext } from 'react';
import { AuthProvider } from 'react-oauth2-code-pkce';
import { OAUTH_CONFIG } from '../../../apps/config/config';

const OAuth2PKCEContext = createContext(null);

export const OAuth2PKCEProvider = ({ children }) => {
  const authConfig = {
    clientId: OAUTH_CONFIG.GOOGLE.CLIENT_ID,
    authorizationEndpoint: OAUTH_CONFIG.GOOGLE.AUTH_URL,
    tokenEndpoint: OAUTH_CONFIG.GOOGLE.TOKEN_URL,
    redirectUri: OAUTH_CONFIG.GOOGLE.REDIRECT_URI,
    scope: OAUTH_CONFIG.GOOGLE.SCOPE,
    // Optionally provide a callback function to run _before_ the
    // user is redirected to the auth server for login
    preLogin: () => localStorage.setItem('preLoginPath', location.pathname),  // default: () => null
    // Optionally provide a callback function to run _after_ the
    // user has been redirected back from the auth server
    postLogin: () => location.replace(localStorage.getItem('preLoginPath')),  // default: () => null
    autoLogin: false,
    decodeToken: false,
    // Can be used if auth provider doesn't return access token expiration time in token response
    tokenExpiresIn: 3600, // default: null
    // Can be used if auth provider doesn't return refresh token expiration time in token response
    refreshTokenExpiresIn: 3600, // default: null
    // Defines the expiration strategy for the refresh token.
    // - 'renewable': The refresh token's expiration time is renewed each time it is used, getting a new validity period.
      // - 'absolute': The refresh token's expiration time is fixed from its initial issuance and does not change, regardless of how many times it is used.
    refreshTokenExpiryStrategy: 'renewable',  // default: renewable
    // Whether or not to post 'scope' when refreshing the access token
    refreshWithScope: true, // default: true
    // Controls whether browser credentials (cookies, TLS client certificates, or authentication headers containing a username 
    //and password) are sent when requesting tokens.
    // Warning: Including browser credentials deviates from the standard protocol and can introduce unforeseen security issues. 
    // Only set this to 'include' if you know what you are doing and CSRF protection is present. Setting this to 'include' is 
    // required when the token endpoint requires client certificate authentication, but likely is not needed in any other case.
    // Use with caution.
    //tokenRequestCredentials: 'omit', // default: 'same-origin'
    extraTokenParameters: {
      client_secret: OAUTH_CONFIG.GOOGLE.CLIENT_SECRET,
    },
    onRefreshTokenExpire: (event) => window.confirm('Session expired. Refresh?') 
      && event.login(),
  };

  return (
    <AuthProvider authConfig={authConfig}>
      <OAuth2PKCEContext.Provider value={{}}>
        {children}
      </OAuth2PKCEContext.Provider>
    </AuthProvider>
  );
}; 