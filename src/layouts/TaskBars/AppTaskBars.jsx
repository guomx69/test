import React from 'react';
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-menu-item";


import { CalciteMenu, CalciteMenuItem} from '@esri/calcite-components-react';

const AppTaskBars = ({ selectedMenuItem, onTaskItemClick }) => {
  //console.log('selectedMenuItem in AppTaskBars', selectedMenuItem);
  return (
    
       <CalciteMenu layout="horizontal"  slot="content-start" expanded>
     
        {selectedMenuItem === 'file' && (
          <>
            <CalciteMenuItem text="Open DataView" iconStart="folder-open" onClick={() => onTaskItemClick('open-file')} />
            <CalciteMenuItem text="Save DataView" iconStart="save" onClick={() => onTaskItemClick('save-file')} />
            <CalciteMenuItem text="Save DataView As" iconStart="save-as" onClick={() => onTaskItemClick('save-file-as')} />
            <CalciteMenuItem text="Load Deflaut DataView" iconStart="add-in-new" onClick={() => onTaskItemClick('new-file')} />
          </>
        )}
        {selectedMenuItem === 'search' && (
          <>
            <CalciteMenuItem text="Zoom To Township or Section" iconStart="zoom-to-object" onClick={() => onTaskItemClick('zoom-to-township-or-section')} />
          </>
        )}
        {selectedMenuItem === 'data' && (
          <>
            <CalciteMenuItem text="Refresh Data" iconStart="refresh" onClick={() => onTaskItemClick('refresh-data')} />
            <CalciteMenuItem text="Export Data" iconStart="export" onClick={() => onTaskItemClick('export-data')} />
          </>
        )}
        {selectedMenuItem === 'help' && (
          <>
            <CalciteMenuItem text="Documentation"  iconStart="book" onClick={() => onTaskItemClick('documentation')} />
            <CalciteMenuItem text="Contact Support"  iconStart="phone" onClick={() => onTaskItemClick('contact-support')} />
          </>
        )}
    
    </CalciteMenu>
  );
};

export default AppTaskBars; 