import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { AppResource } from '../config/config';
import { useState } from "react";

import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";

import { 
  CalciteShell,
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteMenu,
  CalciteMenuItem
} from "@esri/calcite-components-react";

import ConfirmLogout from '../../libs/components/ConfirmLogout';
import './publicLayout.css';

export const PublicLayout = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('home');

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/logout');
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };
  

  return (
    <CalciteShell>
      <CalciteNavigation slot="header" className="public-navigation">
        <CalciteNavigationLogo 
          slot="logo" 
          heading="Welcome to NioGEMS" 
          thumbnail={AppResource.logo}
          className="public-logo"
        />
        <CalciteMenu slot="content-end" className="public-menu">
          <Link to="/" onClick={() => handleMenuItemClick('home')}>
            <CalciteMenuItem
              text="Home"
              iconStart="home"
              textEnabled
              active={selectedMenuItem === 'home'?true:undefined}
            />
          </Link>
          <Link to="/about" onClick={() => handleMenuItemClick('about')}>
            <CalciteMenuItem
              text="About"
              iconStart="information"
              textEnabled
              active={selectedMenuItem === 'about'?true:undefined}
            />
          </Link>
          {!isAuth ? (
            <Link to="/login" onClick={() => handleMenuItemClick('login')}>
              <CalciteMenuItem
                text="Sign In"
                iconStart="sign-in"
                textEnabled
                active={selectedMenuItem === 'login'?true:undefined}
              />
            </Link>
          ) : (
            <CalciteMenuItem
              text="Sign Out"
              iconStart="sign-out"
              textEnabled
              onClick={handleLogout}
            />
          )}
           <Link to="/app">
            <CalciteMenuItem
              text="Application"
              iconStart="apps"
              textEnabled
  
            />
          </Link>
          <Link to="/admin" >
            <CalciteMenuItem
              text="Admin"
              iconStart="drone-quadcopter"
              textEnabled
            />
          </Link>
          
         
        </CalciteMenu>
      </CalciteNavigation>
      
      <div className="public-content">
        <Outlet />
      </div>

      <ConfirmLogout 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
    </CalciteShell>
  );
};