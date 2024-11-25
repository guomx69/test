import { Outlet, useNavigate, Link } from "react-router-dom";
import { useState, useReducer, useEffect } from "react";

import "@esri/calcite-components/dist/components/calcite-navigation";

import "@esri/calcite-components/dist/components/calcite-menu";
//import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-dropdown";

import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";

import { 
  CalciteShell,
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteMenu,
  //CalciteButton,
  CalciteMenuItem,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem
} from '@esri/calcite-components-react';

import ConfirmLogout from '../../libs/components/confirmLogout';
import AdminTaskBars from "../../apps/admin/components/AdminTaskBars";
import CommonTasksBar from '../../libs/components/commonTasksBar';

import { AppResource } from '../config/config';
import './adminLayout.css';

// Menu items constant - using original menu items
const MENU_ITEMS = {
  user: 'users',
  data: 'data',
  setting: 'settings',
  help: 'help'
};

// Action types
const SET_SELECTED_MENU = 'SET_SELECTED_MENU';

// Initial state
const initialState = {
  [MENU_ITEMS.user]: undefined,
  [MENU_ITEMS.data]: undefined,
  [MENU_ITEMS.setting]: undefined,
  [MENU_ITEMS.help]: undefined
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

export const AdminLayout = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [menuState, dispatch] = useReducer(menuReducer, initialState);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/logout');
  };

  const handleMenuClick = (menuItem) => {
    dispatch({ type: SET_SELECTED_MENU, payload: menuItem });
  };

  const handleDropdownAction = (action) => {
    console.log(`Action clicked: ${action}`);
    // Handle different actions here
  };
  useEffect(() => {
    const menuItem = window.location.pathname.split('/')[2]||MENU_ITEMS.user;
    dispatch({ type: SET_SELECTED_MENU, payload: menuItem });
  }, []);

  return (
    <CalciteShell>
      <CalciteNavigation className="admin-navigation" slot="header">
        <CalciteNavigationLogo 
              slot="logo" 
              heading="NioGEMS" 
              thumbnail={AppResource.logo}
              className="public-logo"
              href="/"
          />
        <CalciteMenu slot="content-end" >
          <Link to="/admin/users"> 
          <CalciteDropdown>
           
            <CalciteMenuItem 
              slot="trigger"
              text="User"
              iconStart="user"
              active={menuState[MENU_ITEMS.user]}
              onClick={() => handleMenuClick(MENU_ITEMS.user)}
              />
                     
            <CalciteDropdownGroup>
              <CalciteDropdownItem
                iconStart="user-plus"
                onClick={() => handleDropdownAction('add-user')}
              >
                Add User
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="user-up"
                onClick={() => handleDropdownAction('edit-user')}
              >
                Edit User
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="user-x"
                onClick={() => handleDropdownAction('delete-user')}
              >
                Delete User
              </CalciteDropdownItem>
            </CalciteDropdownGroup>
          </CalciteDropdown>
          </Link>

          <Link to="/admin/data">
          <CalciteDropdown>
            <CalciteMenuItem
              slot="trigger"
              text="Data"
              iconStart="data-check"
              active={menuState[MENU_ITEMS.data]}
              onClick={() => handleMenuClick(MENU_ITEMS.data)}
            />
            <CalciteDropdownGroup>
              <CalciteDropdownItem
                iconStart="import"
                onClick={() => handleDropdownAction('import-data')}
              >
                Import Data
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="export"
                onClick={() => handleDropdownAction('export-data')}
              >
                Export Data
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="check-circle"
                onClick={() => handleDropdownAction('validate-data')}
              >
                Validate Data
              </CalciteDropdownItem>
            </CalciteDropdownGroup>
          </CalciteDropdown>
          </Link>
          <Link to="/admin/settings">
          <CalciteDropdown>
            <CalciteMenuItem
              slot="trigger"
              text="Settings"
              iconStart="gear"
              active={menuState[MENU_ITEMS.setting]}
              onClick={() => handleMenuClick(MENU_ITEMS.setting)}
            />
            <CalciteDropdownGroup>
              <CalciteDropdownItem
                iconStart="gear"
                onClick={() => handleDropdownAction('system-settings')}
              >
                System Settings
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="lock"
                onClick={() => handleDropdownAction('security')}
              >
                Security
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="file-report"
                onClick={() => handleDropdownAction('logs')}
              >
                Logs
              </CalciteDropdownItem>
            </CalciteDropdownGroup>
          </CalciteDropdown>
          </Link>

          <Link to="/admin/help">
          <CalciteDropdown>
            <CalciteMenuItem
              slot="trigger"
              text="Help"
              iconStart="lightbulb"
              active={menuState[MENU_ITEMS.help]}
              onClick={() => handleMenuClick(MENU_ITEMS.help)}
            />
            <CalciteDropdownGroup>
              <CalciteDropdownItem
                iconStart="book"
                onClick={() => handleDropdownAction('documentation')}
              >
                Documentation
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="headset"
                onClick={() => handleDropdownAction('support')}
              >
                Support
              </CalciteDropdownItem>
            </CalciteDropdownGroup>
          </CalciteDropdown>
          </Link>

          <CalciteMenuItem
            text="Logout"
            iconStart="sign-out"
            onClick={handleLogout}
          />
        </CalciteMenu>
        <CalciteNavigation slot="navigation-secondary">
          <CommonTasksBar />
        </CalciteNavigation>
        <CalciteNavigation slot="navigation-tertiary">
          <AdminTaskBars selectedMenuItem={Object.keys(menuState).find(key => menuState[key] === true)} />
        </CalciteNavigation>
      </CalciteNavigation>
      
 
      
      <div className="container mx-auto p-4 mt-16">
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

export default AdminLayout;