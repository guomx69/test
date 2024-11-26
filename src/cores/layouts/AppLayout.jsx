import React, { useReducer, useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-action";
import { 
  CalciteShell, 
  CalciteShellPanel, 
  CalcitePanel,
  CalciteNavigation, 
  CalciteNavigationLogo, 
  CalciteMenuItem,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteMenu,
  CalciteButton,
  CalciteAction
} from '@esri/calcite-components-react';

import AppTaskBars from "../../apps/components/AppTaskBars";
import ConfirmLogout from '../../libs/components/confirmLogout';
import CommonTasksBar from '../../libs/components/commonTasksBar';
import { AppResource } from '../config/config';

//import "../../apps/assets/styles/appmap.css";
import './appLayout.css';

// Menu items constant
const MENU_ITEMS = {
  file: 'file',
  search: 'search',
  data: 'data',
  help: 'help'
};

// Action types
const SET_SELECTED_MENU = 'SET_SELECTED_MENU';

// Initial state
const initialState = {
  [MENU_ITEMS.file]: undefined,
  [MENU_ITEMS.search]: undefined,
  [MENU_ITEMS.data]: undefined,
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

export const AppLayout = () => {
  const [menuState, dispatch] = useReducer(menuReducer, initialState);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);

  const togglePanel = () => {
    setIsPanelCollapsed(!isPanelCollapsed);
  };

  const handleMenuItemClick = (item) => {
    dispatch({ type: SET_SELECTED_MENU, payload: item });
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/logout');
  };

  const handleDropdownAction = (action) => {
    console.log(`Action clicked: ${action}`);
    // Handle different actions here
  };
  useEffect(() => {
    const menuItem = window.location.pathname.split('/')[2]||MENU_ITEMS.file;
    dispatch({ type: SET_SELECTED_MENU, payload: menuItem });
  }, []);

  return (
    <CalciteShell>
      <CalciteNavigation className="app-navigation" slot="header">
        <CalciteNavigationLogo 
          slot="logo" 
          heading="NioGEMS" 
          thumbnail={AppResource.logo}
          className="public-logo"
          href="/"
        />
        <CalciteMenu slot="content-end">
          <Link to="/app/file">
          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="File"
              iconStart="folder"
              textEnabled
              active={menuState[MENU_ITEMS.file]}
              onClick={() => handleMenuItemClick(MENU_ITEMS.file)}
            />
            <CalciteDropdownGroup>
             
              <CalciteDropdownItem
                iconStart="folder-open"
                onClick={() => handleDropdownAction('open-file')}
              >
                Open DataView
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="save"
                onClick={() => handleDropdownAction('save-file')}
              >
                Save DataView
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="save-as"
                onClick={() => handleDropdownAction('save-file')}
              >
                Save DataView As
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="add-in-new"
                onClick={() => handleDropdownAction('new-file')}
              >
                Load Deflaut DataView
              </CalciteDropdownItem>

            </CalciteDropdownGroup>
          </CalciteDropdown>
          </Link>

          <Link to="/app/search">
          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="Search"
              iconStart="search"
              textEnabled
              active={menuState[MENU_ITEMS.search]}
              onClick={() => handleMenuItemClick(MENU_ITEMS.search)}
            />
            <CalciteDropdownGroup>
              <CalciteDropdownItem
                iconStart="zoom-to-object"
                onClick={() => handleDropdownAction('run-query')}
              >
                Zoom To Township or Section
              </CalciteDropdownItem>
             
            </CalciteDropdownGroup>
          </CalciteDropdown>
          </Link>

          <Link to="/app/data">
              <CalciteDropdown overlayPositioning="fixed">
              <CalciteMenuItem
                slot="trigger"
                text="Data"
                iconStart="data"
                textEnabled
                active={menuState[MENU_ITEMS.data]}
                onClick={() => handleMenuItemClick(MENU_ITEMS.data)}
              />
              <CalciteDropdownGroup>
                <CalciteDropdownItem
                  iconStart="refresh"
                  onClick={() => handleDropdownAction('refresh-data')}
                >
                  Refresh Data
                </CalciteDropdownItem>
                <CalciteDropdownItem
                  iconStart="export"
                  onClick={() => handleDropdownAction('export-data')}
                >
                  Export Data
                </CalciteDropdownItem>
              </CalciteDropdownGroup>
            </CalciteDropdown>
          </Link>

          <Link to="/app/help">
          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="Help"
              iconStart="lightbulb"
              textEnabled
              active={menuState[MENU_ITEMS.help]}
              onClick={() => handleMenuItemClick(MENU_ITEMS.help)}
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
                onClick={() => handleDropdownAction('contact-support')}
              >
                Contact Support
              </CalciteDropdownItem>
            </CalciteDropdownGroup>
          </CalciteDropdown>
          </Link>
          <CalciteMenuItem
            text="Logout"
            iconStart="sign-out"
            textEnabled
            onClick={handleLogout}
          />
        </CalciteMenu>
        <CalciteNavigation slot="navigation-secondary">
                <CommonTasksBar />
        </CalciteNavigation>
        <CalciteNavigation slot="navigation-tertiary">
                <AppTaskBars selectedMenuItem={Object.keys(menuState).find(key => menuState[key] === true)} />
        </CalciteNavigation>
      </CalciteNavigation>
        
      

      {/* Left Panel - Calcite structure with React content */}
    
       {/* Collapsible Panel */}
       <CalciteShellPanel 
        slot="panel-start" 
        position="start"
        collapsed={isPanelCollapsed}
        resizable
      >
        <div className="panel-handle" onClick={togglePanel}>
          <CalciteAction
            icon={isPanelCollapsed ? "chevron-right" : "chevron-left"}
            text={isPanelCollapsed ? "Expand" : "Collapse"}
            scale="s"
          />
        </div>
        <CalcitePanel>
          <div>
            <h2>Panel Content</h2>
            <p>This content is inside the collapsible panel.</p>
          </div>
        </CalcitePanel>
      </CalciteShellPanel>
    
   
        {/* Right Panel - Calcite structure with React content */}
      <CalciteShellPanel 
        slot="panel-end"
        position="end"
        className="bg-gray-50 right-panel"
      >
        <CalcitePanel>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Right Panel</h2>
            {/* Custom React components within Calcite structure */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Recent Activity</h3>
                
              </div>
            </div>
          </div>
        </CalcitePanel>
      </CalciteShellPanel>
      
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

export default AppLayout;