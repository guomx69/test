import React from 'react';

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
  ArcgisPlacement
} from "@arcgis/map-components-react";

import { useAuth } from '../../cores/contexts/AuthContext';
import { AppStatus } from '../../cores/config/config';


function AppHome() {
  const { user } = useAuth();
  console.log(user,user.reservations)

  const onArcGISViewClick = (event) => {
    console.log(event,"from arcgis map");
  };
  
  const onArcgisViewReadyChange = (event) => {
   const { map, view } = event.target;
   console.log("from arcgis view ready change",map,view);
    
  };
 
  return (
    <div className="map-container">
        <ArcgisMap
          basemap="arcgis-topographic"
          zoom={AppStatus.zoom}
          center={AppStatus.center}
          onArcgisViewReadyChange={onArcgisViewReadyChange}
          onArcgisViewClick={onArcGISViewClick}
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
  );
}
export default AppHome;

