import React from 'react';
import { Link } from 'react-router-dom';
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import { 
  CalciteMenu, 
  CalciteMenuItem 
} from '@esri/calcite-components-react';


const AdminTaskBars = ({ selectedMenuItem, onTaskItemClick }) => {
  return (
    <CalciteMenu layout="horizontal" slot="content-start" expanded>
      {selectedMenuItem === 'users' && (
        <>
          <CalciteMenuItem text="Add User" iconStart="user-plus" onClick={() => onTaskItemClick('add-user')} />
          <CalciteMenuItem text="Edit User" iconStart="user-up" onClick={() => onTaskItemClick('edit-user')} />
          <CalciteMenuItem text="Delete User" iconStart="user-x" onClick={() => onTaskItemClick('delete-user')} />
          <CalciteMenuItem text="User Groups" iconStart="users" onClick={() => onTaskItemClick('user-groups')} />
        </>
      )}
      {selectedMenuItem === 'data' && (
        <>
          <CalciteMenuItem text="Import Data" iconStart="import" onClick={() => onTaskItemClick('import-data')} />
          <CalciteMenuItem text="Export Data" iconStart="export" onClick={() => onTaskItemClick('export-data')} />
          <CalciteMenuItem text="Validate Data" iconStart="check-circle" onClick={() => onTaskItemClick('validate-data')} />
          <CalciteMenuItem text="Data Backup" iconStart="save" onClick={() => onTaskItemClick('data-backup')} />
        </>
      )}
    
      {selectedMenuItem === 'settings' && (
         <> 
          <CalciteMenuItem text="System Settings" iconStart="gear" />
          <CalciteMenuItem text="Security" iconStart="lock" onClick={() => onTaskItemClick('security')} />
          <CalciteMenuItem text="Backup" iconStart="save" onClick={() => onTaskItemClick('backup')} />
          <CalciteMenuItem text="Logs" iconStart="file-report" onClick={() => onTaskItemClick('logs')} />
          </>
      )}
      {selectedMenuItem === 'help' && (
        <>
          <CalciteMenuItem text="Documentation" iconStart="book" />
          <CalciteMenuItem text="Support" iconStart="headset" onClick={() => onTaskItemClick('support')} />
          <CalciteMenuItem text="About" iconStart="information" onClick={() => onTaskItemClick('about')} />
        </>
      )}
    </CalciteMenu>
  );
};

export default AdminTaskBars; 