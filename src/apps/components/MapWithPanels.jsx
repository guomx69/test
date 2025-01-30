import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

// import "@esri/calcite-components/dist/calcite/calcite.css";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-expand";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-placement";
import { 
  ArcgisMap, 
  ArcgisBasemapGallery,
  ArcgisSearch,
  ArcgisLegend,
  ArcgisExpand,
  ArcgisZoom,
  ArcgisPlacement,
} from "@arcgis/map-components-react";

import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import { CalciteShellPanel, CalcitePanel } from '@esri/calcite-components-react';


import CompLeftPanelHandler, { CompRightPanelHandler } from '../../libs/components/handles/PanelHandle';

import { useAuth } from '../../cores/contexts/AuthContext';
import { AppStatus } from '../config/config';


function CompMapWithPanels() {
  const { user } = useAuth();    // console.log(user,user.reservations)
   const { keepViewContext } = useOutletContext();
   //console.log("xxxxxx outletContent in MapWithPanels",keepViewContext);
  
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(false);
  const toggleLeftPanel = () => {
    setIsLeftPanelCollapsed(!isLeftPanelCollapsed);
  };
  const toggleRightPanel = () => {
    setIsRightPanelCollapsed(!isRightPanelCollapsed);
  };


  const onArcGISViewClick = (event) => {
   const { map, view } = event.target;
   console.log("from onArcGISViewClick",map,view);
  };
  
  const onArcgisViewReadyChange = (event) => {
   const { map, view } = event.target;
   //console.log("from arcgis view ready change",map,view);
   keepViewContext(view);
  };

  const onArcgisViewMouseWheel = (event) => {
    const { map, view } = event.target;
    console.log("from arcgis view mouse wheel",view.zoom);
    view.zoom = view.zoom + 1;
    console.log("zoomed in",view.zoom);

  };
 
  return (
    <>

    <div className="map-container">
        <ArcgisMap
          basemap="arcgis-topographic"
          zoom={AppStatus.zoom}
          center={AppStatus.center}
          onArcgisViewReadyChange={onArcgisViewReadyChange}
          onArcgisViewClick={onArcGISViewClick}
          onArcgisViewMouseWheel={onArcgisViewMouseWheel}
        >
          <ArcgisSearch position="top-right"></ArcgisSearch>
          <ArcgisZoom position="top-right">
          </ArcgisZoom>
          <ArcgisExpand  position="top-right">
              <ArcgisBasemapGallery />
          </ArcgisExpand>
          <ArcgisExpand position="bottom-right">
            <ArcgisLegend ></ArcgisLegend>
          </ArcgisExpand>   
          <ArcgisPlacement position="bottom-right">
           <h1>Welcome to NioGEMS App {user.name}</h1>
          </ArcgisPlacement>     
        </ArcgisMap>
    </div>

      {/* Left Panel - Calcite structure with React content */}
      <CompLeftPanelHandler 
          isExpanded={!isLeftPanelCollapsed} 
          onToggle={toggleLeftPanel} 
      />
       {/* Collapsible Panel */}
      <CalciteShellPanel 
        slot="panel-start" 
        className="left-panel"
        position="start"
        displayMode='dock'
        collapsed={isLeftPanelCollapsed}
        resizable
      >
        <CalcitePanel  collapsible>
          <div>
            <h2>Panel Content</h2>
            <p>This content is inside the collapsible panel.</p>
          </div>
        </CalcitePanel>
      </CalciteShellPanel>
      {/* Right Panel - Calcite structure with React content */}
      <CompRightPanelHandler 
            isExpanded={!isRightPanelCollapsed} 
           onToggle={toggleRightPanel} 
      />
      <CalciteShellPanel 
        slot="panel-end"
        position="end"
        displayMode='dock'
        className="right-panel"
        collapsed={isRightPanelCollapsed}
        resizable
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
    </>
   
  );
}
export default CompMapWithPanels;

