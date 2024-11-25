import React from 'react';
import { Link } from 'react-router-dom';
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import { 
  CalciteMenu, 
  CalciteMenuItem 
} from '@esri/calcite-components-react';


const AdminTaskBars = ({ selectedMenuItem }) => {
  return (
    <CalciteMenu layout="horizontal" slot="content-start" expanded>
      {selectedMenuItem === 'users' && (
        <>
          <CalciteMenuItem text="Add User" iconStart="user-plus" />
          <CalciteMenuItem text="Edit User" iconStart="user-up" />
          <CalciteMenuItem text="Delete User" iconStart="user-x" />
          <CalciteMenuItem text="User Groups" iconStart="users" />
        </>
      )}
      {selectedMenuItem === 'data' && (
        <>
          <CalciteMenuItem text="Import Data" iconStart="import" />
          <CalciteMenuItem text="Export Data" iconStart="export" />
          <CalciteMenuItem text="Validate Data" iconStart="check-circle" />
          <CalciteMenuItem text="Data Backup" iconStart="save" />
        </>
      )}
    
      {selectedMenuItem === 'settings' && (
         <> 
          <CalciteMenuItem text="System Settings" iconStart="gear" />
          <CalciteMenuItem text="Security" iconStart="lock" />
          <CalciteMenuItem text="Backup" iconStart="save" />
          <CalciteMenuItem text="Logs" iconStart="file-report" />
          </>
      )}
      {selectedMenuItem === 'help' && (
        <>
          <CalciteMenuItem text="Documentation" iconStart="book" />
          <CalciteMenuItem text="Support" iconStart="headset" />
          <CalciteMenuItem text="About" iconStart="information" />
        </>
      )}
    </CalciteMenu>
  );
};

export default AdminTaskBars; 