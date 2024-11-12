import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../cores/contexts/AuthContext';

//import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-card";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-scrim";

import { 
  CalciteButton, 
  CalciteInput, 
  CalciteLabel, 
  CalciteCard,
  CalciteIcon,
  CalciteScrim
} from '@esri/calcite-components-react';

import './login.css';

function Login() {
  const { isAuth, loginAsync, isLoading, setIsLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmitAsync = async(e) => {
    setIsLoading(true);
    e.preventDefault();
    const isSuccess = await loginAsync(username, password);
    if(isSuccess) {
      navigate(from, { replace: true });
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    if (isAuth) {
      //console.log("IsAuth",isAuth, "in Login useEffect");
      navigate(from, { replace: true });
    }
  }, [isAuth]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isLoading && <CalciteScrim loading></CalciteScrim>}
      <div className="login-container">
        <CalciteCard className="login-card">
          <h2 slot="title" className="login-title">
            Welcome to NIOGEMS
          </h2>
          
          <form onSubmit={handleSubmitAsync} className="login-form">
            <CalciteLabel>
              USERNAME
              <CalciteInput
                type="text"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
                required
                icon="user"
                scale="l"
                status="idle"
                clearable
                placeholder="Enter your username"
              />
            </CalciteLabel>
            
            <div className="password-container">
              <CalciteLabel>
                PASSWORD
                <CalciteInput
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                  required
                  icon="lock"
                  scale="l"
                  status="idle"
                  placeholder="Enter your password"
                />
              </CalciteLabel>
              <div className="password-toggle" onClick={togglePassword}>
                <CalciteIcon
                  icon={showPassword ? "view-hide" : "view-visible"}
                  scale="m"
                />
              </div>
            </div>
            
            <div className="login-button-container">
              <CalciteButton 
                type="submit" 
                scale="l"
                className="login-button"
              >
                Sign In
              </CalciteButton>
            </div>
          </form>
        </CalciteCard>
      </div>
    </>
  );
}

export default Login;
