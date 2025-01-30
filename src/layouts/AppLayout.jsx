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
import "@esri/calcite-components/dist/components/calcite-panel";
import { 
  CalciteShell, 
  CalciteNavigation, 
  CalciteNavigationLogo, 
  CalciteMenuItem,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteMenu,
  CalcitePanel
} from '@esri/calcite-components-react';

import AppTaskBars from "./TaskBars/AppTaskBars";
import CompConfirmLogout from '../libs/components/confirmLogout';
import CommonTasksBar from './TaskBars/commonTasksBar';


import { AppResource } from '../apps/config/config';

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

export const AppLayout = () => { console.log("AppLayout is called");
  const [menuState, dispatch] = useReducer(menuReducer, initialState);
  const [mapView, setMapView] = useState(null);
  const [outletContType, setOutletContType] = useState("data-viewer");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  
 

  const handleMenuClick = (item) => {
    dispatch({ type: SET_SELECTED_MENU, payload: item });
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/logout');
  };

  const handleMenuItemClick = (action) => {
    console.log(`a Menu Item Dropdown Action clicked: ${action}`);
    // Handle different actions here
  };

  const handleCommonTaskItemClick = (action) => {
    console.log(`a Common Task Item clicked: ${action} from AppLayout`);
    if(action === 'zoom-out'){
      console.log("zoom out in handleCommonTaskItemClick AppLayout");
      if(mapView){
        mapView.zoom = mapView.zoom - 1;
        console.log("zoomed out",mapView.zoom);
      }
    }
    else if(action === 'zoom-in'){
      console.log("zoom in in handleCommonTaskItemClick AppLayout");
      if(mapView){
        mapView.zoom = mapView.zoom + 1;
        console.log("zoomed in",mapView.zoom);
      }
    }
    else if(action === 'map-viewer'){
      console.log("map viewer in handleCommonTaskItemClick AppLayout");
      setOutletContType("map-viewer");
    }
    else if(action === 'data-viewer'){
      console.log("data viewer in handleCommonTaskItemClick AppLayout");
      setOutletContType("data-viewer");
    }
  };

  const keepViewContext = (view) => {
    //console.log("zoom out in keepViewContext AppLayout",view);
    setMapView(view);
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
              onClick={() => handleMenuClick(MENU_ITEMS.file)}
            />
            <CalciteDropdownGroup>
             
              <CalciteDropdownItem
                iconStart="folder-open"
                onClick={() => handleMenuItemClick('open-file')}
              >
                Open DataView
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="save"
                onClick={() => handleMenuItemClick('save-file')}
              >
                Save DataView
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="save-as"
                onClick={() => handleMenuItemClick('save-file-as')}
              >
                Save DataView As
              </CalciteDropdownItem>
              <CalciteDropdownItem
                iconStart="add-in-new"
                onClick={() => handleMenuItemClick('new-file')}
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
              onClick={() => handleMenuClick(MENU_ITEMS.search)}
            />
            <CalciteDropdownGroup>
              <CalciteDropdownItem
                iconStart="zoom-to-object"
                onClick={() => handleMenuItemClick('zoom-to-township-or-section')}
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
                onClick={() => handleMenuClick(MENU_ITEMS.data)}
              />
              <CalciteDropdownGroup>
                <CalciteDropdownItem
                  iconStart="refresh"
                  onClick={() => handleMenuItemClick('refresh-data')}
                >
                  Refresh Data
                </CalciteDropdownItem>
                <CalciteDropdownItem
                  iconStart="export"
                  onClick={() => handleMenuItemClick('export-data')}
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
                onClick={() => handleMenuItemClick('contact-support')}
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
                <CommonTasksBar onCommonTaskItemClick={handleCommonTaskItemClick} />
        </CalciteNavigation>
        <CalciteNavigation slot="navigation-tertiary">
                <AppTaskBars onTaskItemClick={handleMenuItemClick} selectedMenuItem={Object.keys(menuState).find(key => menuState[key] === true)} />
        </CalciteNavigation>
      </CalciteNavigation>

      <CalcitePanel>
        <Outlet context={{ keepViewContext, outletContType }} />
      </CalcitePanel>

      <CompConfirmLogout 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
    </CalciteShell>
  );
};

export default AppLayout;