import { Outlet, useNavigate, Link } from "react-router-dom";
import { useState, useReducer, useEffect } from "react";

import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-panel";
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
  CalcitePanel,
  //CalciteButton,
  CalciteMenuItem,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem
} from '@esri/calcite-components-react';

import CompConfirmLogout from '../libs/components/confirmLogout';
import AdminTaskBars from "./TaskBars/AdminTaskBars";
import CommonTasksBar from './TaskBars/commonTasksBar';

import { AppResource } from '../apps/config/config';
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

  const handleMenuItemClick = (action) => {
    console.log(`Action clicked: ${action}`);
    // Handle different actions here
  };

  const handleCommonTaskItemClick = (action) => {
    console.log(`a Common Task Item clicked: ${action} from AdminLayout`);
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
                onClick={() => handleMenuItemClick('add-user')}
              >
                Add User
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="user-up"
                onClick={() => handleMenuItemClick('edit-user')}
              >
                Edit User
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="user-x"
                onClick={() => handleMenuItemClick('delete-user')}
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
                onClick={() => handleMenuItemClick('import-data')}
              >
                Import Data
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="export"
                onClick={() => handleMenuItemClick('export-data')}
              >
                Export Data
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="check-circle"
                onClick={() => handleMenuItemClick('validate-data')}
              >
                Validate Data
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="save"
                onClick={() => handleMenuItemClick('data-backup')}
              >
                Data Backup
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
                onClick={() => handleMenuItemClick('system-settings')}
              >
                System Settings
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="lock"
                onClick={() => handleMenuItemClick('security')}
              >
                Security
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="file-report"
                onClick={() => handleMenuItemClick('logs')}
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
                onClick={() => handleMenuItemClick('documentation')}
              >
                Documentation
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="headset"
                onClick={() => handleMenuItemClick('support')}
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
          <CommonTasksBar onCommonTaskItemClick={handleCommonTaskItemClick} />
        </CalciteNavigation>
        <CalciteNavigation slot="navigation-tertiary">
          <AdminTaskBars  onTaskItemClick={handleMenuItemClick} selectedMenuItem={Object.keys(menuState).find(key => menuState[key] === true)} />
        </CalciteNavigation>
      </CalciteNavigation>
      
 
      
       <CalcitePanel>
        <Outlet />
       </CalcitePanel>
      

      <CompConfirmLogout 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
    </CalciteShell>
  );
};

export default AdminLayout;