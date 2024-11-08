import React from 'react';
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import { CalciteActionBar, CalciteActionGroup, CalciteAction } from '@esri/calcite-components-react';

const AppTaskBars = ({ selectedMenuItem }) => {
  return (
    <CalciteActionBar layout="horizontal" expanded>
      <CalciteActionGroup>
        {selectedMenuItem === 'file' && (
          <>
            
            <CalciteAction text="Open DataView" icon="folder-open" textEnabled />
            <CalciteAction text="Save DataView" icon="save" textEnabled />
            <CalciteAction text="Save DataView As" icon="save-as" textEnabled />
            <CalciteAction text="Load Deflaut DataView" icon="add-in-new" textEnabled />
          </>
        )}
        {selectedMenuItem === 'search' && (
          <>
            <CalciteAction text="Zoom To Township or Section" icon="zoom-to-object" textEnabled />
          </>
        )}
        {selectedMenuItem === 'data' && (
          <>
            <CalciteAction text="Refresh Data" icon="refresh" textEnabled />
            <CalciteAction text="Export Data" icon="export" textEnabled />
          </>
        )}
        {selectedMenuItem === 'help' && (
          <>
            <CalciteAction text="Documentation" icon="book" textEnabled />
            <CalciteAction text="Contact Support" icon="phone" textEnabled />
          </>
        )}
        {selectedMenuItem === 'logout' && (
          <CalciteAction text="Confirm Logout" icon="sign-out" textEnabled />
        )}
      </CalciteActionGroup>
    </CalciteActionBar>
  );
};

export default AppTaskBars; 