import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";

import { 
  CalciteShell,
  CalciteNavigation,
  CalciteMenu,
  CalciteMenuItem,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteNavigationLogo
} from '@esri/calcite-components-react';

import AppTaskBars from "../../apps/components/AppTaskBars";
import ConfirmLogout from '../../libs/components/ConfirmLogout';
import CommonTasksBar from '../../libs/components/CommonTasksBar';
import { AppResource } from '../config/config';
import './appLayout.css';

export const AppLayout = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('file');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
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
          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="File"
              iconStart="folder"
              textEnabled
              active={selectedMenuItem === 'file' ? true : undefined}
              onClick={() => handleMenuItemClick('file')}
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

          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="Search"
              iconStart="search"
              textEnabled
              active={selectedMenuItem === 'search' ? true : undefined}
              onClick={() => handleMenuItemClick('search')}
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

          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="Data"
              iconStart="data"
              textEnabled
              active={selectedMenuItem === 'data' ? true : undefined}
              onClick={() => handleMenuItemClick('data')}
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

          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="Help"
              iconStart="lightbulb"
              textEnabled
              active={selectedMenuItem === 'help' ? true : undefined}
              onClick={() => handleMenuItemClick('help')}
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

          <CalciteMenuItem
            text="Logout"
            iconStart="sign-out"
            textEnabled
            onClick={handleLogout}
          />
        </CalciteMenu>

        <CommonTasksBar />
      </CalciteNavigation>

      <AppTaskBars selectedMenuItem={selectedMenuItem} />

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