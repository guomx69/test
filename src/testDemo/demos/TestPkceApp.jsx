import React, { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';


import { 
  CalciteButton,
  CalciteCard,
  CalciteLoader
} from '@esri/calcite-components-react';
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-card";
import "@esri/calcite-components/dist/components/calcite-loader";
import './styles/TestPkce.css';

const PkceComponent = () => {
  const { 
    token, 
    logOut, 
    isLoading, 
    error, 
    logIn,
    idTokenData 
  } = useContext(AuthContext);

  const handleLogin = () => {
    logIn();
  }

  if (isLoading) {
    return (
      <div className="loader-container">
        <CalciteLoader type="indeterminate" scale="l" />
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h2>OAuth2 PKCE Authentication Test</h2>
      
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {!token ? (
        <CalciteButton 
          onClick={handleLogin}
          appearance="solid"
          kind="brand"
          scale="m"
        >
          Login with PKCE
        </CalciteButton>
      ) : (
        <CalciteCard>
          <div slot="title">Authentication Successful</div>
          <div slot="subtitle">Token Information</div>
          <div>
            <p>Access Token: {token.substring(0, 20)}...</p>
            <p>Token Type: {idTokenData.token_type}</p>
            <p>Expires In: {idTokenData.expires_in} seconds</p>
          </div>
          <CalciteButton
            
            onClick={logOut}
            appearance="outline"
            kind="danger"
            scale="m"
          >
            Logout
          </CalciteButton>
        </CalciteCard>
      )}
    </div>
  );
};

export default PkceComponent;
