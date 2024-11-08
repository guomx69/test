import React from 'react';
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import { CalciteActionBar, CalciteActionGroup, CalciteAction } from '@esri/calcite-components-react';

const AdminTaskBars = ({ selectedMenuItem }) => {
  return (
    <CalciteActionBar layout="horizontal" expanded>
      <CalciteActionGroup>
        {selectedMenuItem === 'users' && (
          <>
            <CalciteAction text="Add User" icon="user-plus" textEnabled />
            <CalciteAction text="Edit User" icon="user-up" textEnabled />
            <CalciteAction text="Delete User" icon="user-x" textEnabled />
            <CalciteAction text="User Groups" icon="users" textEnabled />
          </>
        )}
        {selectedMenuItem === 'data' && (
          <>
            <CalciteAction text="Import Data" icon="import" textEnabled />
            <CalciteAction text="Export Data" icon="export" textEnabled />
            <CalciteAction text="Validate Data" icon="check-circle" textEnabled />
            <CalciteAction text="Data Backup" icon="save" textEnabled />
          </>
        )}
        {selectedMenuItem === 'dataviewer' && (
          <>
            <CalciteAction text="Refresh Data" icon="refresh" textEnabled />
            <CalciteAction text="Filter Data" icon="filter" textEnabled />
            <CalciteAction text="Export View" icon="export" textEnabled />
            <CalciteAction text="Print View" icon="print" textEnabled />
          </>
        )}
        {selectedMenuItem === 'mapviewer' && (
          <>
            <CalciteAction text="Add Layer" icon="layer" textEnabled />
            <CalciteAction text="Base Maps" icon="map" textEnabled />
            <CalciteAction text="Measure" icon="measure" textEnabled />
            <CalciteAction text="Print Map" icon="print" textEnabled />
          </>
        )}
        {selectedMenuItem === 'settings' && (
          <>
            <CalciteAction text="System Settings" icon="gear" textEnabled />
            <CalciteAction text="Security" icon="lock" textEnabled />
            <CalciteAction text="Backup" icon="save" textEnabled />
            <CalciteAction text="Logs" icon="file-report" textEnabled />
          </>
        )}
        {selectedMenuItem === 'help' && (
          <>
            <CalciteAction text="Documentation" icon="book" textEnabled />
            <CalciteAction text="Support" icon="headset" textEnabled />
            <CalciteAction text="About" icon="information" textEnabled />
          </>
        )}
      </CalciteActionGroup>
    </CalciteActionBar>
  );
};

export default AdminTaskBars; 