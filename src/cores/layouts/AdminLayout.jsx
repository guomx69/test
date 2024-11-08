import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import "@esri/calcite-components/dist/components/calcite-navigation";

import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";

import { 
  CalciteShell,
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteMenu,
  CalciteMenuItem,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem
} from '@esri/calcite-components-react';

import ConfirmLogout from '../../libs/components/ConfirmLogout';
import AdminTaskBars from "../../apps/admin/components/AdminTaskBars";
import CommonTasksBar from '../../libs/components/CommonTasksBar';

import { AppResource } from '../config/config';
import './adminLayout.css';

export const AdminLayout = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('users');

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

  const handleDropdownAction = (action) => {
    console.log(`Action clicked: ${action}`);
    // Handle different actions here
  };

  return (
    <CalciteShell>
      <CalciteNavigation slot="header">
        <CalciteNavigationLogo 
              slot="logo" 
              heading="NioGEMS" 
              thumbnail={AppResource.logo}
              className="public-logo"
              href="/"
          />
        <CalciteMenu slot="content-start">
          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="User"
              iconStart="user"
              textEnabled
              active={selectedMenuItem === 'users' ? true : undefined}
              onClick={() => handleMenuItemClick('users')}
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

          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="Data"
              iconStart="data-check"
              textEnabled
              active={selectedMenuItem === 'data' ? true : undefined}
              onClick={() => handleMenuItemClick('data')}
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

          <CalciteDropdown overlayPositioning="fixed">
            <CalciteMenuItem
              slot="trigger"
              text="Settings"
              iconStart="gear"
              textEnabled
              active={selectedMenuItem === 'settings' ? true : undefined}
              onClick={() => handleMenuItemClick('settings')}
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
                onClick={() => handleDropdownAction('support')}
              >
                Support
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
      
      <AdminTaskBars selectedMenuItem={selectedMenuItem} />
      
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