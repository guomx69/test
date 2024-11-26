import React, { useReducer,useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-menu";
import { 
  CalciteShell, 

  CalciteNavigation, 
  CalciteNavigationLogo, 
  CalciteMenu,
  CalciteMenuItem,
  CalcitePanel
} from '@esri/calcite-components-react';


import ConfirmLogout from '../../libs/components/confirmLogout/ConfirmLogout';
import { useAuth } from '../contexts/AuthContext';
import { AppResource, AppRoles } from '../../cores/config/config';

import "../../apps/assets/styles/appmap.css";

// Action types
const SET_SELECTED_MENU = 'SET_SELECTED_MENU';

const MENU_ITEMS = {
  home: 'home',
  app: 'app',
  admin: 'admin',
  login: 'login',
  about: 'about',
  test: 'test'
}
// Initial state
const initialState = {
  [MENU_ITEMS.home]:undefined,
  [MENU_ITEMS.app]:undefined,
  [MENU_ITEMS.admin]:undefined,
  [MENU_ITEMS.login]:undefined,
  [MENU_ITEMS.about]:undefined,
  [MENU_ITEMS.test]:undefined
};

// Reducer function
const menuReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_MENU:
      return {
        ...initialState,
        [action.payload]: true
      };
    default:
      return state;
  }
};



const PublicLayout = () => {
  const [menuState, dispatch] = useReducer(menuReducer, initialState);
  const navigate = useNavigate();
  const [ isLogoutOpen, setIsLogoutOpen] = React.useState(false);
  const { user,setIsAuth } = useAuth();

  const handleMenuClick = (menuItem) => {
    dispatch({ type: SET_SELECTED_MENU, payload: menuItem });
  };

  const handleLogout = () => {
    setIsLogoutOpen(true);
  };

  const confirmLogout = () => {
    setIsLogoutOpen(false);
    //setIsAuth(true);
    navigate('/logout');
  };
  
  useEffect(() => {
    const menuItem = window.location.pathname.split('/')[1]||MENU_ITEMS.home;
    dispatch({ type: SET_SELECTED_MENU, payload: menuItem });
  }, []);
  return (
    <CalciteShell>
      
        <CalciteNavigation slot="header">
          <CalciteNavigationLogo 
            slot="logo" 
            heading="Welcome to NIOGEMS" 
            thumbnail={AppResource.logo}
            className="public-logo"
            href="/"
          />
        
           <CalciteMenu slot="content-end" >
          {/* Home Menu Item */}
          <Link to="/">
            <CalciteMenuItem 
              text="Home" 
              icon="home"
              active={menuState[MENU_ITEMS.home]}
              onClick={() => handleMenuClick(MENU_ITEMS.home)}
            />
          </Link>
          {/* App Menu Items - Show when authenticated */}
          {user && (
             <Link to={`/${MENU_ITEMS.app}`}>
                <CalciteMenuItem 
                  text="App" 
                  icon="apps"
                  active={menuState[MENU_ITEMS.app]}
                  onClick={() => handleMenuClick(MENU_ITEMS.app)}
                />
              </Link>
          
          )}

          {/* Admin Menu Items - Show when authenticated and role is admin */}
          {user && user.role === AppRoles.admin && (
            <Link to={`/${MENU_ITEMS.admin}`}>
              <CalciteMenuItem 
                text="Admin" 
                icon="gear"
                active={menuState[MENU_ITEMS.admin]}
                onClick={() => handleMenuClick(MENU_ITEMS.admin)}
              />
            </Link>
          )}

          {/* Login/Logout Menu Item */}
          {user ? (
           
              <CalciteMenuItem 
                text="Logout" 
                icon="sign-out"
                onClick={handleLogout}
              />
          
          ) : (
            <Link to={`/${MENU_ITEMS.login}`}>
              <CalciteMenuItem 
                text="Login" 
                icon="sign-in"
                active={menuState[MENU_ITEMS.login]}
                onClick={() => handleMenuClick(MENU_ITEMS.login)}
              />
            </Link>
          )}
          {/* About Menu Item */}
          <Link to={`/${MENU_ITEMS.about}`}>
            <CalciteMenuItem 
              text="About" 
              icon="info"
              active={menuState[MENU_ITEMS.about]}
              onClick={() => handleMenuClick(MENU_ITEMS.about)}
            />
          </Link>
           {/* Public Menu Items */}
           <Link to={`/${MENU_ITEMS.test}`}>
            <CalciteMenuItem 
              text="Test" 
              icon="test"
              active={menuState[MENU_ITEMS.test]}
              onClick={() => handleMenuClick(MENU_ITEMS.test)}
            />
           </Link>
          </CalciteMenu>
        </CalciteNavigation>

        <CalcitePanel>
          <Outlet />
        </CalcitePanel>

      <ConfirmLogout 
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={confirmLogout}
      />
      
    </CalciteShell>
  );
};

export default PublicLayout;