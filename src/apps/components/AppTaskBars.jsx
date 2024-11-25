import React from 'react';
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";


import { CalciteMenu, CalciteMenuItem} from '@esri/calcite-components-react';

const AppTaskBars = ({ selectedMenuItem }) => {
  console.log('selectedMenuItem in AppTaskBars', selectedMenuItem);
  return (
    
       <CalciteMenu layout="horizontal"  slot="content-start" expanded>
     
        {selectedMenuItem === 'file' && (
          <>
            <CalciteMenuItem text="Open DataView" iconStart="folder-open" />
            <CalciteMenuItem text="Save DataView" iconStart="save" />
            <CalciteMenuItem text="Save DataView As" iconStart="save-as" />
            <CalciteMenuItem text="Load Deflaut DataView" iconStart="add-in-new" />
          </>
        )}
        {selectedMenuItem === 'search' && (
          <>
            <CalciteMenuItem text="Zoom To Township or Section" iconStart="zoom-to-object" />
          </>
        )}
        {selectedMenuItem === 'data' && (
          <>
            <CalciteMenuItem text="Refresh Data" iconStart="refresh" />
            <CalciteMenuItem text="Export Data" iconStart="export" />
          </>
        )}
        {selectedMenuItem === 'help' && (
          <>
            <CalciteMenuItem text="Documentation"  iconStart="book" />
            <CalciteMenuItem text="Contact Support"  iconStart="phone" />
          </>
        )}
    
    </CalciteMenu>
  );
};

export default AppTaskBars; 